import React, { useState } from 'react';
import { Transition } from '@headlessui/react'
import RomageLogo from '@/assets/Images/CompanyLogo/RomageLogo.webp'
import HamburgerIcon from '@/assets/Images/Icons/Hamburger.webp'
import HamburgerLine from '@/assets/Images/Icons/Hamburger1Line.webp'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black shadow-lg p-2">
      <div className="mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <img className="h-8 w-auto" src={RomageLogo} alt="RomageLogo" />
          </a>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <img src={HamburgerLine} className='w-[20px]' alt='Line' /> : <img src={HamburgerIcon} className='w-[20px]' alt='hamburger' />}
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/support" exact className={location.pathname === "/support" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Support</Link>
          <Link to="/terms" exact className={location.pathname === "/terms" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Terms</Link>
          <Link to="/privacy-policy" exact className={location.pathname === "/privacy-policy" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Privacy</Link>
          <select name="" id="" className='h-[20px] self-center'>
            <option value="">ENG</option>
            <option value="">ENG</option>
            <option value="">ENG</option>
          </select>
        </div>

      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/support" exact className={location.pathname === "/support" ? "text-white block hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Support</Link>
            <Link to="/terms" exact className={location.pathname === "/terms" ? "text-white block hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Terms</Link>
            <Link to="/privacy-policy" exact className={location.pathname === "/privacy-policy" ? "text-white block hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Privacy</Link>
            <select name="" id="" className='ml-[13px] h-[20px] self-center'>
              <option value="">ENG</option>
              <option value="">ENG</option>
              <option value="">ENG</option>
            </select>
          </div>
        </div>
      </Transition>

    </nav>
  );
}

export default Navbar;

