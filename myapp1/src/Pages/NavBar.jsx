import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'



const NavBar = () => {
    return (
        <div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/products">Products </Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutus">About us</Link>
                <Link to='/hook'>Hook</Link>
            </div>
            
            <Outlet />


        </div>
    )
}

export default NavBar
