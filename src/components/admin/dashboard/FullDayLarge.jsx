import React, { useState } from 'react';
import cross from '../../../assets/Images/Icons/cross.webp'
import editpen from '../../../assets/Images/Icons/editpen.webp'
import deletebin from '../../../assets/Images/Icons/delete.webp'
import contact from '../../../assets/Images/Icons/contact.webp'
import man from '../../../assets/Images/Icons/man.png'
import downarow from '../../../assets/Images/Icons/arrow-down.webp'
import calander from '../../../assets/Images/Icons/calandericon.webp'
import FulldayShiftdropdown from './FulldayShiftdropdown';
import TimeDropdown from './TimeDropdown';
import DateField from './DateField';



const FullDayLarge = () => {
    // State to track whether the popup is open
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler to toggle popup visibility
    const handleClick = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const editmodalopen = () => {
        setIsModalOpen(!isModalOpen);

    };

    return (
        <div>
            {/* Clickable div that toggles the popup */}
            <div
                className="w-[25%] border-1 bg-[#ebf2f3] h-[55px]  border-[#337E89] rounded-[5px]  cursor-pointer"
                onClick={handleClick}
            >
                <p className='text-[#337E89] pl-[7px] pt-[5px] font-bold text-[14px] font-dm-sans'>Full day</p>
                <p className='text-[#747474] pl-[7px] pt-[5px] font-bold text-[12px] font-dm-sans'>09:00-16:00</p>
            </div>

            {/* Conditionally rendered popup */}
            {isPopupOpen && (
                <div className="fixed dark:bg-[#222222] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[340px] h-[174px] z-20 border-0 rounded-[25px] p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[8px] h-[8px] rounded-[50%] bg-[#337E89]"></div>
                            <p className='font-bold font-dm-sans text-[16px]'>Full Day</p>
                        </div>
                        <div className="flex items-center gap-[15px]">

                            <div className="mt-2 hover:cursor-pointer mb-[7px]" onClick={editmodalopen}>
                                <img src={editpen} className='w-[20px] h-[20px]' alt="" />
                            </div>
                            <img src={deletebin} className='w-[20px] h-[20px]' alt="" />
                            <div className="mt-2 hover:cursor-pointer mb-[6px]" onClick={() => setIsPopupOpen(false)}>
                                <img src={cross} className='w-[20px] h-[20px]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[#747474] font-dm-sans font-normal text-[14px]'>08:00-16:00</p>
                    </div>
                    <div className="flex items-center gap-[10px] mt-[20px]">
                        <img src={contact} alt="" />
                        <div className="flex gap-1">
                            <p className='font-semibold font-dm-sans text-[14px]'>8</p>
                            <p className='font-normal font-dm-sans text-[14px]'>April</p>
                            <p className='font-semibold font-dm-sans text-[14px]'>2023</p>
                            <p className='font-semibold font-dm-sans text-[14px]'>-</p>
                            <p className='font-semibold font-dm-sans text-[14px]'>13</p>
                            <p className='font-normal font-dm-sans text-[14px]'>April</p>
                            <p className='font-semibold font-dm-sans text-[14px]'>2023</p>

                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] gap-[10px]">
                        <img src={man} className='w-[20px] w-[20px]' alt="" />
                        <p className='font-semibold font-dm-sans text-[14px]'>Abdullah Nasir</p>

                    </div>
                </div>
            )}
            {isModalOpen && (
                <div className="fixed top-1/2 left-1/2 dark:bg-[#222222] transform -translate-x-1/2 -translate-y-1/2 bg-white w-[700px] px-[30px] py-[20px] h-[546px] z-20 border-0 rounded-[25px] p-4 shadow-lg">
                    <p className='font-dm-sans font-semibold text-[24px] text-[#131216] my-[20px] dark:text-white'>Update Shift</p>
                    <hr />
                    <div className="flex items-center gap-[50%] mt-[20px]">
                        <p className='font-medium text-[18px] font-dm-sans'>Name</p>
                        <p className='font-medium text-[18px] font-dm-sans'>Select Day</p>
                    </div>

                    <div className="flex items-center gap-[16%] my-[20px]">
                        <input type='text' className='font-medium shadow-md text-[18px] font-dm-sans h-[66px] border-1 w-[284px] focus:outline-none p-2' />
                       <FulldayShiftdropdown />
                    </div>

                    <div className="flex items-center gap-[10%] mt-[30px]">
                        <p className='font-medium text-[18px] font-dm-sans'>Start Date</p>
                        <p className='font-medium text-[18px] font-dm-sans ml-[10px]'>End Date</p>
                        <p className='font-medium text-[18px] ml-[23px] font-dm-sans'>Select Time</p>
                    </div>

                    <div className="flex items-center gap-[20px] mt-[20px]">
                       
                        <DateField />
                        <TimeDropdown />
                        
                    </div>


                    <div className="flex mt-[50px] justify-center gap-[15px]">
                        <button className='h-[61px] w-[165px] font-semibold text-[16px] font-dm-sans flex items-center justify-center rounded-[56px] shadow-md dark:bg-black' onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button className='h-[61px] w-[165px] font-semibold text-[16px] bg-[#00AF65] text-white font-dm-sans flex items-center justify-center rounded-[56px] shadow-md' onClick={() => setIsModalOpen(false)}>Update</button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default FullDayLarge;
