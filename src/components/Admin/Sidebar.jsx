
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
      <div className="fixed top-4 left-4 z-20 md:hidden">
        <button onClick={toggleSidebar} className="text-2xl text-black">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-20 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-64`}
      >
        <h2 className="text-2xl font-bold text-center py-4">Admin Panel</h2>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/bookings"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Bookings
              </Link>
            </li>
            <li>
              <Link
                to="/admin/menus"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Menus
              </Link>
            </li>
            <li>
              <Link
                to="/admin/items"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
               Items
              </Link>
            </li>
            <li>
              <Link
                to="/admin/coupons"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
               Coupons
              </Link>
            </li>
            <li>
              <Link
                to="/admin/transactions"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Transactions
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
