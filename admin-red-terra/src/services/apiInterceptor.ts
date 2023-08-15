import api from './api'
import { getData } from './storageService'
import { signOutRequest } from '../store/modules/auth/actions'
import * as dotenv from 'dotenv'

dotenv.config()

const apiInterceptors = (store: any) => {
  const { dispatch } = store
  api.interceptors.request.use(
    async (config: any) => {
      const token =
        (await getData(process.env.REACT_APP_TOKEN_KEY as string)) || {}
      config.headers.authorization = `${token}`
      config.transformRequest = (data: any, headers: any) => {
        return headers['Content-Type'] === 'application/json'
          ? JSON.stringify(data)
          : data
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        dispatch(signOutRequest())
        return api(originalRequest)
      }
      return Promise.reject(error)
    }
  )
}
export default apiInterceptors
