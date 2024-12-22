import React from 'react';
import { Avatar } from "@nextui-org/react";
import SearchIcon from '../../../assets/Images/Icons/SearchIcon.png';
import SearchIconWhite from '../../../assets/Images/Icons/SearchIconWhite.png';
import Bullet from '../../../assets/Images/Icons/BulletIcon.png';
import AllMembers from '../../../assets/Images/Icons/AllMembersIcon.png';
import inputicon from '../../../assets/Images/Icons/messegeinput.webp';
import star from '../../../assets/Images/Icons/ystar.webp';
import group from '../../../assets/Images/Icons/group.webp'
const ChatScreen = () => {
    return (
        <>
            <div className='shadow-md rounded-[13px] mb-5'>
            <div className='w-[100%] mb-[10px] mt-[-10px] relative  lg:hidden'>
                            <input type="text" placeholder='search' className='px-10 py-2 z-0 shadow-lg focus:outline-none rounded-[50px] w-[100%]' />
                            <img src={SearchIcon} alt="" className='absolute top-[50%] translate-y-[-50%] left-[10px]' />
                        </div>
                <header className='bg-black p-5 rounded-t-[13px] lg:block hidden'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[40%] relative hidden lg:block'>
                            <input type="text" placeholder='search' className='px-10 focus:outline-none py-2 rounded-[50px] w-[100%]' />
                            <img src={SearchIcon} alt="" className='absolute top-[50%] translate-y-[-50%] left-[10px]' />
                        </div>
                        <div className='w-[60%]'>
                            <div className='w-[90%] mx-auto flex justify-between items-center'>
                                <div className='flex justify-start items-center gap-3'>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /><h1 className='text-white text-[14px] font-normal'>Messenger</h1>
                                </div>
                                <div className='flex justify-end items-center gap-3'>
                                    <img src={SearchIconWhite} alt="" />
                                    <img src={Bullet} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className='flex justify-between'>
                    <div className='w-[100%] lg:w-[40%] bg-[#eeeded] dark:bg-[#222222] p-3 rounded-bl-[13px]'>
                        <div className='w-[100%] p-3 bg-[#D0D0D0] flex justify-between items-center dark:bg-[#222222]'>
                            <h1 className='text-[16px] font-extrabold border-b-1 border-black'>All Messages</h1>
                            <img src={AllMembers} alt="" />
                        </div>
                        {/* One User Chat */}
                       <a href="" className=''>
                       <div className='flex justify-start items-center relative gap-3 px-2 py-3 dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <img src={group} className='absolute top-[46%] left-[43px] z-20' alt="" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                            <div className="ml-[90px]">
                            <img src={star} alt="" />
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 relative px-2 py-3 dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <img src={group} className='absolute top-[46%] left-[43px] z-20' alt="" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                            <div className="ml-[90px]">
                            <img src={star} alt="" />
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 px-2 py-3 dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 px-2 py-3 dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 px-2 py-3 relative dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <img src={group} className='absolute top-[46%] left-[43px] z-20' alt="" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 px-2 py-3 relative dark:hover:bg-black hover:bg-[#d0d0d0] transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <img src={group} className='absolute top-[46%] left-[43px] z-20' alt="" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                        </div>
                       </a>
                        {/* One User Chat */}
                        <a href="" className=''>
                       <div className='flex justify-start items-center gap-3 px-2 py-3 hover:bg-[#d0d0d0] dark:hover:bg-black transition duration-300 ease-out hover:ease-in'>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <div>
                                <h1 className='text-black text-[14px] font-extrabold dark:text-white'>Umair</h1>
                                <p className='text-[14px] font-normal'>Did you finish the dashboard
                                    ERP software? </p>
                                <h1 className='text-[11px] font-normal'>Today | 08:00 PM</h1>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className='w-[0%] lg:w-[60%] hidden lg:block relative'>
                        <h1 className='text-[14px] font-normal text-center text-[#696969] mt-5'>Please select a chat to start messaging</h1>
                        <img src={inputicon} className='absolute left-[91%] bottom-[24px] z-40' alt="" />

                        <hr className='w-[100%] absolute bottom-[80px]' />
                        <div className="w-[100px]">
                            <input type="text" className='p-4  dark:placeholder-[#fff] w-[95%] bg-[#D9D9D9] border-none focus:outline-none absolute bottom-[2%] left-1/2 transform -translate-x-1/2 rounded-[30px] border-2 text-[14px] dark:bg-[#222222] dark:text-white' placeholder='Type your massege here...' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ChatScreen;
