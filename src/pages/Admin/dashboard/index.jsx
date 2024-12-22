import React, { useState } from 'react';
import FilterBTNIcon from '@/assets/Images/Icons/FilterBTNIcon.webp'
import FilterDropdownIcon from '@/assets/Images/Icons/FilterDropDownIcon.webp'
import UpdatesIcon from '@/assets/Images/Icons/UpdatesBTNIcon.webp'
import AdminLayout from '@/layouts/admin/AdminLayout';
import icondown from '../../../assets/Images/Icons/arrow-down.webp'
import EmployeeScheduleCalendar from '@/components/admin/dashboard/EmployeeScheduleCalendar';
import arowleft from '../../../assets/Images/Icons/arow-left.webp'
import arowright from '../../../assets/Images/Icons/arow-right.webp'
import FilterDashboard from '../../../components/admin/dashboard/FilterDashboard';
import Pagination from '../../../components/admin/dashboard/Pagination';
import MonthDropdown from '../../../components/admin/dashboard/MonthDropdown';


const Dashboard = () => {
    return (
        <>
            <AdminLayout title="Admin Dashboard">
                <children>
                    <div className="w-[95%] mx-auto mt-7 mb-7">
                        {/* 1 */}
                        <div className="w-[100%] flex justify-between items-center">
                            <div className="flex lg:gap-[10px] gap-[85px] items-center">
                                <h1 className='text-3xl font-bold font-dm-sans'>19 Dec 2023</h1>
                                <div className="flex items-center gap-[10px]">
                                    <div className="border-1 rounded-[50%] p-[15px] hover:cursor-pointer dark:bg-white">
                                        <img src={arowleft} alt="" />
                                    </div>
                                    <div className="border-1 rounded-[50%] p-[15px] hover:cursor-pointer dark:bg-white">
                                        <img src={arowright} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-end items-center gap-2 hidden sm:flex ">

                                <MonthDropdown />
                                <FilterDashboard />
                                <button className='px-7 py-2 rounded-[16px] text-white bg-[#00AF65] flex justify-center items-center gap-2 p-2'>
                                    <img src={UpdatesIcon} alt="" />
                                    Updates
                                </button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="w-[100%] lg:border border-[#E5E8EB] rounded-md mt-5 flex justify-between flex-col sm:flex-row items-center">
                            <div className="lg:w-[20%] w-[100%] lg:p-5 flex justify-between items-end gap-2">
                                <div className='lg:w-[80%] w-[60%] border lg:border-0 py-6 px-[20px] lg:p-0'>
                                    <div className="">
                                        <h3 className='text-[9px] font-bold text-[#6C6C6C] mb-5'>Total of working hours per week</h3>
                                    </div>
                                    <div className="">
                                        <div class="bg-[#F5F6F7] rounded-xl shadow-sm overflow-hidden">
                                            <div class="relative h-2 flex items-center justify-center">
                                                <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[90%] bg-[#337E89]">544h</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[50%] lg:w-[20%]'>
                                    <h1 className='font-bold font-dm-sans lg:text-[14px] text-[50px]'>546h</h1>
                                </div>
                            </div>

                            <div className="w-[80%]  lg:p-5 flex justify-between items-end gap-2">
                                <div className='w-[75%] lg:w-[90%] lg:border-l-2 border lg:border-0 py-6 mt-[10px] lg:mt-0 ml-[-35px] lg:ml-0 px-[20px] lg:pl-3'>
                                    <div className="">
                                        <h3 className='text-[9px] font-bold text-[#6C6C6C] mb-5'>Employee working time dashboard</h3>
                                    </div>
                                    <div class="bg-[#F5F6F7] rounded-xl shadow-sm overflow-hidden">
                                        <div class="relative h-2 flex items-center justify-center">
                                            <div class="absolute top-0 bottom-0 left-0 rounded-l-lg w-[35%] bg-[#337E89]"></div>
                                            <div class="absolute top-0 bottom-0 left-[35.1%]  w-[10%] bg-[#1760EC]"></div>
                                            <div class="absolute top-0 bottom-0 left-[45.3%]  w-[20%] bg-[#EC1717]"></div>
                                            <div class="absolute top-0 bottom-0 left-[65.4%]  w-[25%] bg-[#FFAE00]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[34%] lg:w-[10%]'>
                                    <h1 className='font-bold lg:text-[14px] text-[50px]'>2446h</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EmployeeScheduleCalendar />
                    <div className="my-[50px]">
                        <Pagination />
                    </div>
                </children>
            </AdminLayout>
        </>
    );
}

export default Dashboard;