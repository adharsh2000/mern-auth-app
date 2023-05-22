import React from 'react'
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

function UserProtectedRoute() {
    const authState = useSelector(state=> state.userAuth)
  return (
    authState.auth?<Outlet/>:<Navigate to='/login'/>
  )
}

export default UserProtectedRoute
