import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const TimeDropdown = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedTime1, setSelectedTime1] = useState("");
    const [selectedTime2, setSelectedTime2] = useState("");

    const times = ["09:00AM", "10:00AM", "11:00AM", "12:00PM" , "01:00PM" , "02:00PM" , "03:00PM" , "04:00PM" , "05:00PM"];

    const toggleDropdown1 = () => setIsOpen1(!isOpen1);
    const toggleDropdown2 = () => setIsOpen2(!isOpen2);

    const selectTime1 = (time) => {
        setSelectedTime1(time);
        setIsOpen1(false);
    };

    const selectTime2 = (time) => {
        setSelectedTime2(time);
        setIsOpen2(false);
    };

    return (
        <div className="flex items-center gap-2">
            {/* First Time Dropdown */}
            <div className="relative">
                <button
                    onClick={toggleDropdown1}
                    className="flex items-center justify-between px-6 bg-white font-dm-sans border border-[#E5E8EB] h-[66px] w-[140px] shadow-sm focus:outline-none dark:bg-black dark:text-white"
                >
                    <span className="mr-2 font-normal">
                        {selectedTime1 || "Select Time"}
                    </span>
                    {isOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {isOpen1 && (
                    <div className="absolute bg-white border border-gray-300 z-20 shadow-md font-dm-sans rounded-md w-[140px] mt-2 dark:bg-black dark:text-white">
                        <ul>
                            {times.map((time, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectTime1(time)}
                                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                                >
                                    {time}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
<span className="font-dm-sans">To</span>
            {/* Second Time Dropdown */}
            <div className="relative">
                <button
                    onClick={toggleDropdown2}
                    className="flex items-center justify-between px-6 bg-white font-dm-sans border border-[#E5E8EB] h-[66px] w-[140px] shadow-sm focus:outline-none dark:bg-black dark:text-white"
                >
                    <span className="mr-2 font-normal">
                        {selectedTime2 || "Select Time"}
                    </span>
                    {isOpen2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {isOpen2 && (
                    <div className="absolute bg-white border border-gray-300 z-20 shadow-md font-dm-sans rounded-md w-[140px] mt-2 dark:bg-black dark:text-white">
                        <ul>
                            {times.map((time, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectTime2(time)}
                                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                                >
                                    {time}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeDropdown;
