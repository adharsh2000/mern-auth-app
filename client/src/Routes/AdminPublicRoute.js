import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function AdminPublicRoute() {
    const authState = useSelector(state=>state.adminAuth) 
  return (
    !authState.auth?<Outlet />:<Navigate to='/admin/home'/>
  )
}

export default AdminPublicRoute
