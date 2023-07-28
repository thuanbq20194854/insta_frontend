import { Message } from './../../../instagram_be/src/entities/message.entity'
import axios, { type AxiosInstance } from 'axios'
import { lsStorage } from './storage'
import { TRefreshTokenResponse } from '~/types/auth.type'

const BASE_URL_API = 'http://localhost:5000'

export class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null

  constructor() {
    this.accessToken = lsStorage('access_token').getItem() || ''
    this.refreshToken = lsStorage('refresh_token').getItem() || ''
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: BASE_URL_API,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        const { url } = config

        console.log('config of request: ', config)

        // cái này để là if đầu tiên vì nếu để cái else if kia lên đầu thì nó luôn nhảy vào cái đó, không phải cái if này.
        if (url === `${BASE_URL_API}/api/auth/refreshToken`) {
          console.log('GO HERE')
          config.headers.Authorization = 'Bearer ' + this.refreshToken

          console.log('is this.refreshToken === local.rt', this.refreshToken === lsStorage('refresh_token').getItem())
          return config
        } else if (this.accessToken) {
          config.headers.Authorization = 'Bearer ' + this.accessToken
          return config
        }

        return config
      },

      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config

        // if login api, set token to LS and http class
        if (url === `${BASE_URL_API}/api/auth/login`) {
          // const data = response.data

          const responseTokens = response.data.data.tokens
          this.accessToken = responseTokens.access_token
          this.refreshToken = responseTokens.refresh_token
          lsStorage('access_token').setItem(responseTokens.access_token)
          lsStorage('refresh_token').setItem(responseTokens.refresh_token)

          console.log('responseTokens: ', responseTokens)
        } else if (url === `${BASE_URL_API}/api/auth/logout`) {
          this.accessToken = ''
          this.refreshToken = ''
          lsStorage('access_token').removeItem()
          lsStorage('refresh_token').removeItem()
        }

        console.log('response: ', response)

        return response
      },

      (error) => {
        // If NOT 422 and  401 then LOG/TOAST
        if (!(error.response.status === 422 && error.response.status === 401)) {
          const data = error.response.data

          const message = data.message || error.message
          console.log(message)
        }

        //If ERROR 401 - Unauthorization
        if (error.response.status === 401) {
          const config = error.response.config || {}
          const { url } = config

          console.log('config: ', config.url)
          console.log('error.response?.data?.data?.name: ', error.response?.data.message)
          console.log('error: ', error)

          /*Lỗi trả về phải là "expired token" và URL không phải là của Refresh API 
          Cơ mà đoạn này BE không trả về Name là "expired token" mà chỉ ghi 401 nên không check đc Name */
          if (error.response?.data.message === 'Unauthorized' && url != `${BASE_URL_API}/api/auth/refreshToken`) {
            // accessToken hết hạn

            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 5000)
                })

            return this.refreshTokenRequest.then((access_token) => {
              return this.instance({ ...config, headers: { ...config.headers, authorization: access_token } })
            })
          }

          // Nếu Là RefreshToken API mà vẫn Unauthorization chứng tỏ refreshToken hết hạn
          lsStorage('access_token').removeItem()
          lsStorage('refresh_token').removeItem()
          this.accessToken = ''
          this.refreshToken = ''
          console.error('toast error: ', error.response?.data.message)
        }

        return Promise.reject(error)
      }
    )
  }

  private handleRefreshToken() {
    return this.instance
      .post<TRefreshTokenResponse>(`${BASE_URL_API}/api/auth/refreshToken`)
      .then((res) => {
        console.log('res-handlefunc: ', res)

        const { access_token, refresh_token } = res.data
        this.accessToken = access_token
        this.refreshToken = refresh_token
        lsStorage('access_token').setItem(access_token)
        lsStorage('refresh_token').setItem(refresh_token)

        return access_token
      })
      .catch((error) => {
        lsStorage('access_token').removeItem()
        lsStorage('refresh_token').removeItem()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
  }
}

const http = new Http().instance
export default http
