import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/LOGO.png'
import { AuthContext } from '../Provider/AuthProvider';
import person from '../assets/user.png'
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {

  const {user, logOut} = use(AuthContext);
  const [open, setOpen] = useState(false)

  const handleLogOut = (e) => {

    logOut()
    .then(()=> {
      alert('you logger out Successfully')
    })
    .catch((error)=> {
      console.log(error);
    })
  }


    const Links =
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/about'>Apply</Link></li>
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
    {
      user ? 
      (
        <div className='flex gap-2 justify-center items-center relative'>
        
          <button
          onClick={()=> setOpen(!open)}
           className='text-4xl text-blue-600 flex items-center justify-center rounded-full hover:text-blue-300 transition'>
            {user?.photoURL ?  (<img  className='bg-blue-400 rounded-full p-2' src={user.photoURL} alt="User profile" />) : <FaCircleUser />}
            </button>

           <div>
            {
              open && ( 
              <ul className='absolute right-0 mt-7 w-40 bg-white border border-gray-200 rounded-lg shadow-lg text-xl p-2'>
                <li className='hover:bg-blue-600 p-1 hover:text-white font-semibold text-gray-500 transition'><Link to='/myprofile'>My Profile</Link></li>
                <li onClick={handleLogOut} className='hover:bg-blue-600 p-1 hover:text-white font-semibold text-gray-500 transition'><Link>Log Out</Link></li>
              
              </ul>
                
              )
            }
           </div>

        </div>
       ) :
       (
        <div><Link to='/auth/login' className="btn bg-primary text-white font-bold rounded-lg mr-3">Login</Link>
    <Link to='/auth/registration' className="btn border-3 bg-white font-bold border-blue-600 text-blue-600 rounded-lg">Registration </Link></div>
      )
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;