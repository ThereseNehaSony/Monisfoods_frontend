
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { logout } from '../redux/reducers/user/authSlice';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  const user = useSelector((state) => state.auth.user);


  const handleLogout = () => {
    
    dispatch(logout());

    // localStorage.removeItem("authToken");

  
    navigate("/login");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
   
      <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0 left-0 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">Monis Foods</div>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-gray-800 p-4 md:hidden`}
        >
          <ul className="space-y-4 text-center">
            {user ? (
              <>
              <li>
                  <Link to="/home" className="block text-xl" onClick={closeMenu}>
                  Home
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="block text-xl" onClick={closeMenu}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/wallet" className="block text-xl" onClick={closeMenu}>
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/bookings" className="block text-xl" onClick={closeMenu}>
                    Bookings
                  </Link>
                </li>
                <li>
                <Link to="/login" className="block text-xl" onClick={handleLogout}>
                   Logout
               </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="block text-xl" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="block text-xl" onClick={closeMenu}>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Spacer to push content below the navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
