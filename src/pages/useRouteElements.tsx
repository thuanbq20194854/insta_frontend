import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import Home from './Home'
import Explore from './Explore/Explore'
import Login from './Login'
import RegisterLayout from '~/layouts/RegisterLayout'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/stores'
import Account from './Account'

export const PATH_BASE = '/'
export const PATH_REGISTER = '/accounts/emailsignup/'
export const PATH_PERSON_ACCOUNT = '/:user_name'
export const PATH_MESSAGE_LIST = '/message/me'
export const PATH_MESSAGE_DIRECT_LIST = '/message/:user_name'
export const PATH_STORY_LIST = '/stories/:user_name'
export const PATH_ACCOUNT_SETTING = '/accounts/edit/'
export const PATH_ACCOUNT_PASSWORD_SETTING = '/accounts/password/change/'

export default function useRouteElements() {
  const AuthenticatedRoutes = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
    // nếu isAuthenticated === true, có thể vào các child route của nó
    // nếu isAuthenticated === false, redirect về "/"
  }

  const RejectedRoutes = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }

  const routerElements = useRoutes([
    {
      path: '',
      element: <RejectedRoutes />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        }
      ]
    },

    {
      path: '',
      element: <AuthenticatedRoutes />,
      children: [
        {
          path: '/user_name',
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        }
      ]
    },

    {
      path: '/:user_name',
      index: true,
      element: (
        <MainLayout>
          <Account />
        </MainLayout>
      )
    },
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/explore',
      element: (
        <MainLayout>
          <Explore />
        </MainLayout>
      )
    }
  ])

  return routerElements
}
