import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className='login_cont'>
       
        <div className='login'>
        <h1>Login </h1>
          <h3>Email Id </h3>
          <input type="text"/>
          <h3>Password </h3>
          <input type="text"/>
          <div className='btn'>
          <button>Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login
