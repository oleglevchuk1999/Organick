import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return ( 
        <div className="container">
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/api'>API</NavLink>
            </header>
        <div className='content'>
        <Outlet/>
        </div>
       
        <footer> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </footer>
      </div>
     );
}
 
export default Header;