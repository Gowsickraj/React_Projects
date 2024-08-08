import React from 'react';
import '../App.css'
import { Link, Outlet } from 'react-router-dom';
import Form from './Form';


const NavBar = () => {
  return (
    <div>
      <div className='App'>
        <Link to='/home'>Home</Link>
        <Link to='/form'>Form</Link>

        <Outlet/>



      </div>
    </div>
  )
}

export default NavBar
