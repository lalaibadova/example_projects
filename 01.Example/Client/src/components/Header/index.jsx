import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/index.css"
const Header = () => {
  return (
  <nav>
      <div className="container">
        <div className="row">
            <div className="col-4">
                   <a href="#">Menu</a>
            </div>
            <div className="col-8">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/reservation'>Reservation</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
  </nav>
  )
}

export default Header