import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return ( 
        <div className="container">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/api">API</Link>
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