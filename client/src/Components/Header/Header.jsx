import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../Actions/AuthUser'


function Header({details}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNaviagte = () => {
    navigate('/userprofile')
  }
  const logOutHAndler = () => {
    localStorage.removeItem('authorization.user')
    dispatch(clearUser())
    navigate('/login')
  }
  return (
    <div className='header'>
      <div className='user-name'>
        <p>Hi {details.username}</p>
      </div>
      <div className='user-image'>
        <p style={{cursor: 'pointer'}} onClick={logOutHAndler}>Logout</p>
        <p style={{cursor: 'pointer'}} onClick={handleNaviagte}>Profile</p>
        <Avatar src={details.image} />
      </div>
    </div>
  )
}

export default Header