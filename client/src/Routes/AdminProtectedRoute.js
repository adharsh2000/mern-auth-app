import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

function AdminProtectedRoute() {
    const authState = useSelector(state=>state.adminAuth)
  return (
    authState.auth?<Outlet/>:<Navigate to='/admin' />
  )
}

export default AdminProtectedRoute
