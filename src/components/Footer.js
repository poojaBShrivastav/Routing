import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
          <div>
              <ul>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
                <li><i class="fa-brands fa-whatsapp"></i></li>
              </ul>
          </div>

          <div className='menu'>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Dashboard</li>
              <li>Notice</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='copyright'>@copyRight by pooja shrivastav</div>
    </footer>
  )
}

export default Footer
