import React from 'react'
import './AdminHeader.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearAdmin } from '../../Actions/AuthAdmin';

function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHAndler = () => {
    localStorage.removeItem('authorization.admin')
    dispatch(clearAdmin())
    navigate('/admin')
  }
  return (
    <div className='admin-header'>
      <div className='user-name'>
        <p>Welcome Admin</p>
      </div>
      <div className='user-image'>
        <p style={{cursor: 'pointer'}} onClick={logOutHAndler}>Logout</p>
      </div>
    </div>
  )
}

export default AdminHeader