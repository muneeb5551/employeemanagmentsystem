import React, { useState } from 'react';
import FilterBTNIcon from '@/assets/Images/Icons/FilterBTNIcon.webp'
import downarow from '../../../assets/Images/Icons/downdrop.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FilterButton() {
  // State to manage the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isShiftOpen, setIsShiftOpen] = useState(false);


  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDepartment = () => {
    setIsDepartmentOpen(!isDepartmentOpen);
  };
  const toggleShift = () => {
    setIsShiftOpen(!isShiftOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className='px-7 py-2 border rounded-[16px] border-[#E5E8EB] flex justify-center items-center gap-2'
      >
        <img src={FilterBTNIcon} alt="Filter Button Icon" />
        <h3 className='font-semibold'>Filters</h3>

        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute dark:bg-black top-full w-[220px] mt-2 right-0 bg-white border border-gray-300 shadow-lg rounded-lg py-2 px-4 z-10">
          {/* Department Section */}
          <div className='py-[15px] cursor-pointer'>
            <div className='flex justify-between items-center' onClick={toggleDepartment}>
              <p className='font-bold text-[#121D22] text-[14px] dark:text-white font-dm-sans'>Department</p>
              <img src={downarow} alt="Dropdown Arrow" className={isDepartmentOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </div>
            {isDepartmentOpen && (
              <div className='py-2'>
                {['Software dev', 'Web Designer', 'Mobile dev', 'Web dev'].map((dept, index) => (
                  <div key={index} className="flex items-center gap-[15px] py-[15px] pl-[3px]">
                    <input type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <p className="text-[#9D9CA3] font-normal font-dm-sans text-[12px] dark:text-white">{dept}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr />
          <div className='py-[15px] cursor-pointer'>
            <div className='flex justify-between items-center' onClick={toggleShift}>
              <p className='font-bold text-[#121D22] text-[14px] dark:text-white font-dm-sans'>Shifts</p>
              <img src={downarow} alt="Dropdown Arrow" className={isShiftOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </div>
            {isShiftOpen && (
              <div className='py-2'>
                {['Full Day', 'Half Day'].map((dept, index) => (
                  <div key={index} className="flex items-center gap-[15px] py-[15px] pl-[3px]">
                    <input type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <p className="text-[#9D9CA3] font-normal font-dm-sans text-[12px] dark:text-white">{dept}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr />

          <div className="font-dm-sans py-3 font-bold text-[#121D22] text-[14px] dark:text-white hover:bg-gray-300 cursor-pointer w-full">Remote</div>
          <hr />
          <div className="font-dm-sans py-3 font-bold text-[#121D22] text-[14px] dark:text-white hover:bg-gray-300 cursor-pointer w-full">Vacation</div>
        </div>
      )}
    </div>
  );
}
