import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const MonthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("December");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectMonth = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white font-dm-sans border rounded-[16px] border-[#E5E8EB] px-6  py-2  shadow-sm focus:outline-none dark:bg-black dark:text-white"
      >
        <SlCalender className="mr-2" />
        <span className="mr-2 font-normal">{selectedMonth}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 fixed z-20 shadow-md font-dm-sans rounded-md w[160px] mt-2 w-full dark:bg-black dark:text-white">
          <ul>
            {months.map((month, index) => (
              <li
                key={index}
                onClick={() => selectMonth(month)}
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              >
                {month}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;
