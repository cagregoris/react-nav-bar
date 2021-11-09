import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

// Dropdowns
import DropdownTours from './DropdownTours';
import DropdownBookings from './DropdownBookings';
import DropdownContact from './DropdownContact';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownT, setDropdownT]= useState(false)
  const [dropdownB, setDropdownB]= useState(false)
  const [dropdownC, setDropdownC]= useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo'>
          LOGO
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item"
          onMouseEnter={() => {if(window.innerWidth < 960) {
            setDropdownT(false)
            } else {
              setDropdownT(true)
            } 
          }}
          onMouseLeave={() => {if(window.innerWidth < 960) {
            setDropdownT(false)
            } else {
            setDropdownT(false)
            }
          }}
          >
            <Link to='/tours' className='nav-links' onClick={closeMobileMenu}>
              Tours <i className='fas fa-caret-down' />
            </Link >
            {dropdownT && <DropdownTours />}
          </li>
          <li className="nav-item"
          onMouseEnter={() => {if(window.innerWidth < 960) {
            setDropdownB(false)
            } else {
              setDropdownB(true)
            } 
          }}
          onMouseLeave={() => {if(window.innerWidth < 960) {
            setDropdownB(false)
            } else {
            setDropdownB(false)
            }
          }}
          >
            <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
              Booking <i className='fas fa-caret-down' />
            </Link>
            {dropdownB && <DropdownBookings />}
          </li>
          <li className="nav-item"
          onMouseEnter={() => {if(window.innerWidth < 960) {
            setDropdownC(false)
            } else {
              setDropdownC(true)
            } 
          }}
          onMouseLeave={() => {if(window.innerWidth < 960) {
            setDropdownC(false)
            } else {
            setDropdownC(false)
            }
          }}
          >
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact <i className='fas fa-caret-down' />
            </Link>
            {dropdownC && <DropdownContact />}
          </li>
          <li className="nav-item">
            <Link to='/guest-comments' className='nav-links' onClick={closeMobileMenu}>
              Guest Comments
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  )
}

export default Navbar;