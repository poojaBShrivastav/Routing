import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
function Header() {
  return (
    <header>
      <div className='head1'>
        <img src="/new_logo.png" height="80px" width="80px"/>
      </div>
      <div className='head2'>
          <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li>About us</li>
            <li>Contact</li>
            <li><Link className='link' to="/dashboard">Dashboard</Link></li>
            <li>Student</li>
          </ul>
      </div>
      <div className='head3'>
      <Link to="/login"><button>Login</button></Link>
     <Link to="/register"><button>Register</button></Link>
      </div>
    </header>
   )
}

export default Header
