import React from 'react'
import "./Register.css"
function Register() {
  return (
    <div className='login_cont'>
       
    <div className='login'>
    <h1>Register </h1>
      <h3>Username </h3>
      <input type="text"/>

      <h3>Email Id </h3>
      <input type="text"/>

      <h3>Password </h3>
      <input type="text"/>

      <h3>Contact </h3>
      <input type="text"/>

      <h3>Address </h3>
      <input type="text"/>

      <div className='btn'>
      <button>Login</button>
      </div>
    </div>
</div>
  )
}

export default Register
