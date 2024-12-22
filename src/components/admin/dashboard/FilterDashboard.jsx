import React, { useState } from 'react';
import FilterBTNIcon from '@/assets/Images/Icons/FilterBTNIcon.webp';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import downarow from '../../../assets/Images/Icons/downdrop.png';

export default function FilterDashboard() {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
    const [isShiftOpen, setIsShiftOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    // State for country search and selection
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountries, setSelectedCountries] = useState([]);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleCountry = () => {
        setIsCountryOpen(!isCountryOpen);
    };

    const toggleDepartment = () => {
        setIsDepartmentOpen(!isDepartmentOpen);
    };

    const toggleShift = () => {
        setIsShiftOpen(!isShiftOpen);
    };

    const toggleStatus = () => {
        setIsStatusOpen(!isStatusOpen);
    };

    // List of countries
    const countries = ['Belarus', 'Serbia', 'Georgia', 'Ukraine', 'United Kingdom', 'USA'];

    // Filter countries based on search query
    const filteredCountries = countries.filter(country =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Toggle the selection of a country
    const toggleCountrySelection = (country) => {
        setSelectedCountries((prevSelected) =>
            prevSelected.includes(country)
                ? prevSelected.filter((selectedCountry) => selectedCountry !== country)
                : [...prevSelected, country]
        );
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-controls="filter-dropdown"
                className='px-7 py-2 border rounded-[16px] border-[#E5E8EB] flex justify-center items-center gap-2 dark:text-white dark:bg-black'
            >
                <img src={FilterBTNIcon} alt="Filter Button Icon" />
                <h3 className='font-semibold'>Filters</h3>
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div id="filter-dropdown" className="absolute top-full w-[300px] mt-2 right-0 bg-white border border-gray-300 shadow-lg rounded-lg py-2 px-4 z-10 dark:bg-black">
                    <div>
                        <p className='text-[16px] font-bold font-dm-sans flex justify-between dark:text-white'>
                            Filters
                            <a href="#" className='font-bold text-[12px] font-dm-sans text-[#195CE5] underline'>Clear Filters</a>
                        </p>
                    </div>

                    {/* Department Section */}
                    <div className='py-[15px]'>
                        <div className='flex justify-between items-center' onClick={toggleDepartment}>
                            <p className='font-bold text-[#121D22] text-[14px] dark:text-white'>Department</p>
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

                    {/* Country Section */}
                    <div className='py-[15px]'>
                        <div className='flex justify-between items-center' onClick={toggleCountry}>
                            <p className='font-bold text-[#121D22] text-[14px] dark:text-white'>Country</p>
                            <img
                                src={downarow}
                                alt="Dropdown Arrow"
                                className={isCountryOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
                            />
                        </div>

                        {isCountryOpen && (
                            <div className="py-2">
                                <div className="flex items-center border-2 border-blue-500 rounded-lg px-4 py-2 w-68 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-grow border-none outline-none text-sm text-gray-700 dark:text-white placeholder-gray-400"
                                    />
                                    <button className="bg-transparent border-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="text-[#6C6C6C]"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.304-8.598a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Checkbox List */}
                                {filteredCountries.map((country, index) => (
                                    <div key={index} className="flex items-center gap-[15px] py-[15px] pl-[3px]">
                                        <input
                                            type="checkbox"
                                            checked={selectedCountries.includes(country)}
                                            onChange={() => toggleCountrySelection(country)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <p className={`text-[#9D9CA3] font-normal font-dm-sans text-[12px] dark:text-white ${selectedCountries.includes(country) ? 'font-bold' : ''}`}>
                                            {country}
                                        </p>
                                    </div>
                                ))}

                                <p>
                                    <a href="#" className='text-[12px] font-bold font-dm-sans text-[#195CE5] dark:text-white'>
                                        Show more
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>

                    <hr />



                    {/* Shift Type Section */}
                    <div className='py-[15px]'>
                        <div className='flex justify-between items-center' onClick={toggleShift}>
                            <p className='font-bold text-[#121D22] text-[14px] dark:text-white'>Shift</p>
                            <img src={downarow} alt="Dropdown Arrow" className={isShiftOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                        </div>
                        {isShiftOpen && (
                            <div className='py-2'>
                                {['Half day', 'Full day'].map((shift, index) => (
                                    <div key={index} className="flex items-center gap-[15px] py-[15px] pl-[3px]">
                                        <input type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <p className="text-[#9D9CA3] font-normal font-dm-sans text-[12px] dark:text-white">{shift}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <hr />

                    {/* Status Section */}
                    <div className='py-[15px]'>
                        <div className='flex justify-between items-center' onClick={toggleStatus}>
                            <p className='font-bold text-[#121D22] text-[14px] dark:text-white'>Status</p>
                            <img src={downarow} alt="Dropdown Arrow" className={isStatusOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                        </div>
                        {isStatusOpen && (
                            <div className='py-2'>
                                {['Active', 'Inactive'].map((status, index) => (
                                    <div key={index} className="flex items-center gap-[15px] py-[15px] pl-[3px]">
                                        <input type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <p className="text-[#9D9CA3] font-normal font-dm-sans text-[12px] dark:text-white">{status}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                </div>
            )}
        </div>
    );
}
