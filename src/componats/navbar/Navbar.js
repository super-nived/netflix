import React from 'react'
import './navbar.css';
import LOGO from '../../assets/netflix-logo.png'
function Nav() {
  return (
    <div className='nav_main'>
        <div className='navbar'>
             <div className='logo'><img src={LOGO}></img></div>
            
        </div>

    </div>
  )
}

export default Nav