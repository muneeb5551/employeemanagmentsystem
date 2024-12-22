import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const FulldayShiftdropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedShift, setSelectedShift] = useState("Full day");

  const months = [
   "Full day" , "Half day"
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectShift = (shift) => {
    setSelectedShift(shift);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-6 bg-white font-dm-sans border border-[#E5E8EB] h-[66px] w-[284px] ml-[-20px] shadow-sm focus:outline-none dark:bg-black dark:text-white"
      >
        {/* font-medium shadow-md text-[18px] font-dm-sans h-[66px] border-1 w-[284px] */}
        <span className="mr-2 font-normal">{selectedShift}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 fixed z-20 shadow-md font-dm-sans rounded-md w-[284px] ml-[-20px] mt-2 dark:bg-black dark:text-white">
          <ul>
            {months.map((shift, index) => (
              <li
                key={index}
                onClick={() => selectShift(shift)}
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              >
                {shift}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FulldayShiftdropdown;
