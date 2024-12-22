import React, { Children } from 'react';
import DateIcon from '@/assets/Images/Icons/date.png';
import AdminLayout from '../../../layouts/admin/AdminLayout';

const Details = () => {
    const inputImageStyle = {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translate(-50%, -50%)',
    };
    return (
        <>
            <AdminLayout>
                <children>
                    <div className="w-[95%] mx-auto">
                        <div className="w-[100%] mx-auto mt-7 flex flex-col md:flex-row justify-between items-center">
                            <h1 className='text-[60px] font-bold'>Attendance Details</h1>
                            <div className="flex justify-end items-center gap-5">
                                <div className="flex justify-end items-center gap-5">
                                    <h1 className='text-[16px]  font-medium'>Month</h1>
                                    <h1 className='bg-[#F1F4F9] px-12 py-5 rounded-[10px] text-[16px] text-black'>86%</h1>
                                </div>
                                <div className="flex justify-end items-center gap-5">
                                    <h1 className='text-[16px]  font-medium'>Year</h1>
                                    <h1 className='bg-[#00AF65] px-12 py-5 rounded-[10px] text-white text-[16px]'>86%</h1>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="w-[100%] mb-32">
                            <form action="">
                                <div className="flex flex-col sm:flex-col md:flex-row  justify-between items-center gap-[10%] mt-5">
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Employee ID</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Attendance Date</label><br />
                                        <div className="relative">
                                            <input type="date" className='appearance-none border border-[#D0D5DD] focus:outline-none rounded-[10px] w-[100%] p-5 text-[#636363] text-[14px] font-medium mt-2' />
                                            <img src={DateIcon} className='' alt="" style={inputImageStyle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row  justify-between items-center gap-[10%] mt-5">
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Employee Name</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Designation</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row  justify-between items-center gap-[10%] mt-5">
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Clock IN</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Clock Out</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row  justify-between items-center gap-[10%] mt-5">
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Shift Time</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                    <div className='w-[100%]'>
                                        <label htmlFor="" className='text-[16px] font-medium text-black'>Status</label><br />
                                        <input type="text" className='border border-[#D0D5DD] rounded-[10px] w-[100%] p-5 focus:outline-none text-[#636363] text-[14px] font-medium mt-2' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </children>
            </AdminLayout>
        </>
    );
}

export default Details;
