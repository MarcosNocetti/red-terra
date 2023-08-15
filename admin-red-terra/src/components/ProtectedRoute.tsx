import { Navigate } from 'react-router-dom'
import { IProtectedRouteProps } from '../interfaces/protectedRouteProps'
import { useSelector } from 'react-redux'

function ProtectedRoute(props: IProtectedRouteProps): JSX.Element {
  const { children, redirectPath } = props

  const { signed, userData } = useSelector((state: any) => state.auth)

  if (!signed) {
    return <Navigate to={redirectPath} replace />
  } else if (!userData?.active) {
    return <Navigate to="/update-password" replace />
  }

  return children
}

export default ProtectedRoute
