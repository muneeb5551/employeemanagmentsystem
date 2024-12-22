import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownComponent = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title); // Use the title as the initial selected option

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);  // Update the selected option
    setIsOpen(false);
    onSelect(option);  // Call the onSelect function passed from parent
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between bg-white font-dm-sans border rounded-[25px] text-[14px] font-extrabold border-[#E5E8EB] px-[14px] py-[2px] shadow-sm focus:outline-none dark:bg-black dark:text-white"
      >
        <span className="mr-2">{selectedOption}</span> {/* Show selected option */}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 z-20 shadow-md font-dm-sans rounded-md w-[160px] mt-2 dark:bg-black dark:text-white">
          <ul>
            {options.map(option => (
              <li
                key={option}
                onClick={() => selectOption(option)}  // Update selected option on click
                className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
