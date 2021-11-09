import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

// Dropdowns
import DropdownTours from './DropdownTours';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown]= useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/tours' className='nav-links' onClick={closeMobileMenu}>
              Tours <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <DropdownTours />}
          </li>
          <li className="nav-item">
            <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
              Booking <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact <i className='fas fa-caret-down' />
            </Link>
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