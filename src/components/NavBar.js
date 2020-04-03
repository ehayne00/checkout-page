import React from 'react'
import hometree from '../media/hometree-icon.png'

const NavBar = () => {
    return (
        <div className="nav-position">
        <div className="navbar">
          <img alt="oh no!" src={hometree} />
          <div className="nav2">
              <h2>Homeowner</h2>
              <h2>Landlord</h2>
              <h2>About Us</h2>
              <h2>Products</h2>
              <h2>Call 0800 368 9881</h2>
          </div>
        </div>
        <div className="yellow-line"></div>
        </div>
    )
}

export default NavBar;