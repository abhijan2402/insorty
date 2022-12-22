import React from 'react'
import { Navigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

function AdminMain() {
  const token = localStorage.getItem('token')

  if(!token){
    return <Navigate to='/login' replace />
  }

  if (token) {
    const decode = jwtDecode(token)
    if (decode.role !== 'admin') {
      return <Navigate to='/login' replace />
    }

  }

  return (
    <div>This is AdminMain</div>
  )
}

export default AdminMain