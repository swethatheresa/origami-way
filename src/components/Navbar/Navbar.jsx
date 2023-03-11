import React from 'react'
import './Navbar.css'
import '../Blogs/Blogs'
import '../Tutorials/Tutorials'
import '../Home/Home'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <ul className='list'>
          <li className='item'><Link to='contact'  spy={true} smooth={true} offset={0} duration={100}>Contact</Link></li>
          <li className='item'><Link to='tutorials'  spy={true} smooth={true} offset={0} duration={100}>Tutorials</Link></li>
          <li className='item'><Link to='blog'  spy={true} smooth={true} offset={-100} duration={100}>Blogs</Link></li>
          <li className='item'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}>Home</Link></li>
        </ul>
      </nav>      
    </div>
  )
}

export default Navbar;
