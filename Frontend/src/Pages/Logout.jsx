import { useEffect } from "react"
import { useAuth } from "../store/context"
import {Navigate} from 'react-router-dom'

function Logout() {
  const { logoutUser } = useAuth()

  useEffect(() => {
    logoutUser()
  }, [logoutUser])

  return (
    <>
    <Navigate to="/login"/>
    </>
  )
}

export default Logout