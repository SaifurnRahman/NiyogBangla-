import React, { use, useState } from 'react';
import { FaCamera, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, Links, useNavigate } from "react-router";
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordExp = /(?=.*\d).{8,}/;
        const passwordExp1 = /(?=.*[a-z]).{8,}/;
        const passwordExp3 = /(?=.*[A-Z]).{8,}/;

        if(passwordExp.test(password) === false){
            setError('Password must have one digit')
            return
        }else if (passwordExp1.test(password) === false){
            setError("Password must have one lowercase")
            return
        }else if (passwordExp3.test(password) === false ){
            setError('Password must have one uppercase')
            return;
        }else{
            setError('')
        }

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            // console.log(user);
            setUser(user);  
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMassage = error.massage;
            alert(errorMassage)
        })
    }
    return (
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6">
    
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Register Your Account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Register to continue your journey with NiyogBangla
          </p>

          <form onSubmit={handleRegister} className="space-y-6">
           
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="name"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaCamera className="absolute left-3 top-3 text-gray-400" />
              <input
                type="photo"
                name="photo"
                placeholder="Enter your photo URL"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {
                error && <p className='text-red-500'>{error}</p>
            }

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>

            <p className="text-sm text-gray-600 text-center">
             Already have an account? Please{" "} <span className="text-blue-600 font-medium hover:underline"> <Link to='/auth/login'>Login</Link> </span>
              
            </p>
          </form>
        </div>
      </div>
    </section>
    );
};

export default Register;