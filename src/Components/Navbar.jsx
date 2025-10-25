import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/LOGO.png'

const Navbar = () => {



    const Links =
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/findjobs'>Find Jobs</Link></li>
    <li><Link to='/hiring'>Hiring Sites</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
   <img className='w-50' src={logo} alt="Niyog Bangla" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl text-accent">
     {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/auth/login' className="btn bg-primary text-white font-bold rounded-lg mr-3">Login</Link>
    <Link to='/auth/registration ' className="btn border-3 bg-white font-bold border-blue-600 text-blue-600 rounded-lg">Registration </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;