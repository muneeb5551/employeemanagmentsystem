import React, { useState, useRef } from 'react';
import { MessageSquare, User2, ListChecks, LucideLayoutDashboard, Briefcase } from "lucide-react";
import { Transition } from '@headlessui/react'
import RomageLogo from '../assets/Images/CompanyLogo/RomageLogo.webp'
import HamburgerIcon from '../assets/Images/Icons/Hamburger.webp'
import HamburgerLine from '../assets/Images/Icons/Hamburger1Line.webp'
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/Images/Icons/profile.webp'
import arrow from '../assets/Images/Icons/breadcrumbsIcon.webp'
import SesrchIcon from '../assets/Images/Icons/SearchIcon.webp'
import CtrlFIcon from '../assets/Images/Icons/CTRL-FIcon.webp'
import ModeIcon from '../assets/Images/Icons/ModeIcon.webp'
import NotificationIcon from '../assets/Images/Icons/NotificationIcon.webp'
import WebViewProfile from '../assets/Images/Icons/WebViewProfile.webp'
import dropdownArrow from '../assets/Images/Icons/arrow-down.webp'
import accountIcon from '../assets/Images/Icons/AccountsIcon.webp'
import notifyIcon from '../assets/Images/Icons/NotifyIcon.webp'
import logoutIcon from '../assets/Images/Icons/LogoutIcon.webp'
import Sidebar, { SidebarItem } from './Sidebar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection, User } from "@nextui-org/react";
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode, setLightMode } from '../redux/Mode/modeSlice.js';
import { Avatar } from "@nextui-org/react";

const Navigation = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);
    const transitionRef = useRef(null);
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.mode);
    const handleModeToggle = () => {
        // Toggle mode based on current mode
        if (mode === 'light') {
            dispatch(setDarkMode());
        } else {
            dispatch(setLightMode());
        }
    };
    const [dropdownNotification, setDropdownNotification] = useState(false);
    const handleNotificationDropDown = () => {
        setDropdownNotification(!dropdownNotification);
    }

    return (
        <nav className="bg-black dark:bg-black lg:bg-white p-1 w-[100%]  m-auto">
            <div className=" py-1 w-[100%] flex items-center justify-between">
                {/* Hamburger Icon for mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <img src={HamburgerLine} className='w-[20px]' alt='Line' /> : <img src={HamburgerIcon} className='w-[20px]' alt='hamburger' />}
                    </button>
                </div>

                <div className="flex justify-between items-center w-[100%]">
                    <div className="first flex justify-start items-center gap-10 w-[60%]">
                        {/* Heading */}
                        <div className="hidden lg:block justify-self-start ml-[15px] w-[40%]">
                            <h1 className='text-[20px] font-medium font-popins'>{title}</h1>
                            <div className="flex justify-start items-center gap-2">
                                <h2 className='text-[12px] font-medium font-dm-sans text-blue-500'>Main Page</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <h2 className='text-[12px] font-dm-sans font-normal'>{title}</h2>

                            </div>
                        </div>
                        {/* Search Bar */}
                        <div className="hidden lg:block w-[60%]">
                            <div className="flex justify-start items-center gap-2 relative">
                                <input type="text" className='w-[100%] px-12 p-2 rounded-lg bg-[#F5F6F7] focus:outline-none' placeholder="Search here..." />
                                <img src={SesrchIcon} className='absolute top-[50%] translate-y-[-50%] left-4' alt="" />
                                <img src={CtrlFIcon} className='absolute top-[50%] translate-y-[-50%] right-4' alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Mobile View Logo */}
                    <div className="lg:hidden">
                        <div className="flex justify-center items-center gap-2">
                            <img src={RomageLogo} className='w-[30%]' alt="" />
                        </div>
                    </div>
                    <div className="second flex justify-end items-center gap-10 w-[40%]">
                        {/* Mode & Notification */}
                        <div className="hidden lg:block justify-self-end">
                            <div className="flex justify-start items-center gap-5">
                                <button onClick={handleModeToggle}>
                                    {mode === 'light' ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                        </svg>
                                    }
                                </button>
                                <Dropdown
                                    backdrop='blur'
                                    showArrow
                                    radius="sm"
                                    classNames={{
                                        base: "before:bg-default-200", // change arrow background
                                        content: "p-0 border-small border-divider bg-background",
                                    }}
                                >
                                    <DropdownTrigger>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Custom item styles"
                                        disabledKeys={["profile"]}
                                        className="p-3"
                                        itemClasses={{
                                            base: [
                                                "rounded-md",
                                                "text-default-500",
                                                "transition-opacity",
                                                "data-[hover=true]:text-foreground",
                                                "data-[hover=true]:bg-default-100",
                                                "dark:data-[hover=true]:bg-default-50",
                                                "data-[selectable=true]:focus:bg-default-50",
                                                "data-[pressed=true]:opacity-70",
                                                "data-[focus-visible=true]:ring-default-500",
                                            ],
                                        }}
                                    >
                                        <DropdownSection aria-label="Profile & Actions" showDivider>
                                            <DropdownItem
                                                isReadOnly
                                                key="profile"
                                                className="h-12 gap-2 opacity-100"
                                            >
                                                <h1 className='text-[32px] font-bold'>Notifications</h1>
                                            </DropdownItem>
                                            <DropdownItem key="dashboard">
                                                <div className='flex justify-start items-center gap-32'>
                                                    <div className='flex justify-start items-center gap-3'>
                                                        <div>
                                                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                                        </div>
                                                        <div>
                                                            <h1>Hani Shah Clocked out .</h1>
                                                            <h4>February 26, 2023</h4>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            </DropdownItem>
                                        </DropdownSection>
                                        <DropdownSection aria-label="Profile & Actions" showDivider>
                                            <DropdownItem key="dashboard">
                                                <div className='flex justify-start items-center gap-32'>
                                                    <div className='flex justify-start items-center gap-3'>
                                                        <div>
                                                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                                        </div>
                                                        <div>
                                                            <h1>Hani Shah Clocked out .</h1>
                                                            <h4>February 26, 2023</h4>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            </DropdownItem>
                                        </DropdownSection>
                                    </DropdownMenu>
                                </Dropdown>
                                {/* <div className='relative'>
                                    <button onClick={handleNotificationDropDown}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </button>
                                    {dropdownNotification && (
                                        <div className='absolute top-15 right-0 backdrop-blur-3xl bg-red-500 p-5' backdrop="blur">
                                            <h1>Nitification</h1>
                                        </div>
                                    )}
                                </div> */}

                            </div>
                        </div>
                        {/* Web View Profile */}
                        <div className="hidden lg:block justify-self-end group relative cursor-pointer">
                            <Dropdown backdrop="blur">
                                <DropdownTrigger>
                                    <Button
                                        variant=""
                                    >
                                        <img src={WebViewProfile} className='block' alt="" />
                                        <div className="profilename">
                                            <h1>Natashia Bunny</h1>
                                            <h3>natasiabunny@mail.com</h3>
                                        </div>
                                        <img src={dropdownArrow} className='cursor-pointer' alt="" />

                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu variant="faded" aria-label="Static Actions">
                                    <DropdownItem key="new">
                                        <Link to="/user-accounts" className='w-full flex justify-start gap-3 items-center'>
                                            <img src={accountIcon} className="block" alt="" />
                                          
                                            <h1 className='font-bold'>Account</h1>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="copy">
                                        <Link className='w-full flex justify-start gap-3 items-center'>
                                            <img src={notifyIcon} className="block" alt="" />
                                            <h1 className='font-bold'>Notifications</h1>
                                        </Link>

                                    </DropdownItem>
                                    <DropdownItem key="edit">
                                        <Link className='w-full flex justify-start gap-3 items-center'>
                                            <img src={logoutIcon} className="block" alt="" />
                                            <h1 className='font-bold'>Log Out</h1>
                                        </Link>

                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                        {/* Mobile View Profile */}
                    </div>
                </div>



                <div className="lg:hidden">
                    <img src={profile} alt="" />
                </div>


                {/* Links */}
                {/* <div className="hidden md:flex space-x-4">
                        <Link to="/support" exact className={location.pathname === "/support" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Support</Link>
                        <Link to="/terms" exact className={location.pathname === "/terms" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Terms</Link>
                        <Link to="/privacy-policy" exact className={location.pathname === "/privacy-policy" ? "text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium  border-b-2 " : "text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"}>Privacy</Link>
                        <select name="" id="" className='h-[20px] self-center'>
                            <option value="">ENG</option>
                            <option value="">ENG</option>
                            <option value="">ENG</option>
                        </select>
                    </div> */}

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
                ref={transitionRef}
            >
                <div className="md:hidden">
                    <Sidebar>
                        <SidebarItem icon={<LucideLayoutDashboard size={30} />} route="/admin/dashboard" text="Dashboard" />
                        <SidebarItem icon={<Briefcase size={30} />} route="/admin/shifts" text="Shifts" />
                        <SidebarItem icon={<ListChecks size={30} />} route="/admin/attendance" text="Attendance" />
                        <SidebarItem icon={<User2 size={30} />} route="/admin/users" text="Users" />
                        <SidebarItem icon={<MessageSquare size={30} />} route="/admin/messenger" text="Messanger" />
                    </Sidebar>
                </div>
                {/* <div className="md:hidden">
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
                    </div> */}
            </Transition>

        </nav>
    );
}

export default Navigation;
