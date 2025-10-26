import React, { use, useState } from 'react';
import { FaCamera, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, Links, useNavigate } from "react-router";
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../Components/Navbar';
import { FaDebian } from 'react-icons/fa6';


const MyProfile = () => {
    const {updateUser, user, setUser} = use(AuthContext)
    const [isUpdated, setIsUpdated] = useState(false);

    const handleUpdate =(e)=> {
         e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const number = form.number.value;

        updateUser({displayName: name, photoURL: photo, phoneNumber : number})
        .then(()=> {
            setUser({...user, displayName: name, photoURL: photo, phoneNumber : number })
            setIsUpdated(true);
            setTimeout(()=> setIsUpdated(false), 3000)
        })
       .catch((error) => {
        console.log(error);
       })
       console.log(user);
    }
    

    return (
        
       <div>
        <Navbar></Navbar>
         <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6">
    
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Update Your Profile Information
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Register to continue your journey with NiyogBangla
          </p>

          <form onSubmit={handleUpdate} className="space-y-6">
            {
                isUpdated && (<div className="mb-4 text-center text-green-600 font-medium">
                    Profile updated successfully!
                </div>)
            }
           
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="name"
                placeholder="Enter Your Name"
                
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaCamera className="absolute left-3 top-3 text-gray-400" />
              <input
                name="photo"
                placeholder="Enter your photo URL"
               
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaDebian className="absolute left-3 top-3 text-gray-400" />
              <input
              type='number'
                name="number"
                placeholder="Enter your Number"
               
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
       </div>
    );
};

export default MyProfile;