import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TUser } from '~/types/auth.type'
import { SuccessResponse } from '~/types/utils.type'
import { axiosBaseQuery } from '../utils/axiosBaseQuery'

export const authApi = createApi({
  reducerPath: 'authApi',
  // tagTypes: ['Posts'],
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'http://localhost:5000'
  // }),

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      SuccessResponse<{
        user: TUser
        tokens: {
          access_token: string
          refresh_token: string
        }
      }>,
      any
    >({
      query: (data) => {
        console.log('body: ', data)
        return {
          url: '/api/auth/login',
          method: 'post',
          data
        }
      }
    })
  })
})

export const { useLoginMutation } = authApi
