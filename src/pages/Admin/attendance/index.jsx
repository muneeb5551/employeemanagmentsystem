import React from 'react';
import AttendanceCard from '@/components/admin/attendance/AttendanceCard';
import { Avatar } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { Pagination } from "@nextui-org/react";
import AdminLayout from '@/layouts/admin/AdminLayout';

const Attendance = () => {
    return (
        <>
            <AdminLayout title="Attendance">
                <children>
                    <div className="w-[95%] mx-auto mt-7">
                        <h1 className='text-[60px] md:text-[50px] font-bold'>Attendance</h1>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h1 className='text-[12px]'>MONTH - DECEMBER</h1>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex justify-between items-center gap-2">
                                    <h1 className='text-[16px] font-medium'>Year</h1>
                                    <select name="" id="" className='border rounded-xl border-[black] dark:bg-[#C8E1F91A]'>
                                        <option value="">2021</option>
                                    </select>
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <h1 className='text-[16px] font-medium'>Month</h1>
                                    <select name="" id="" className='border rounded-xl border-[black] dark:bg-[#C8E1F91A]'>
                                        <option value="">Dec</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Attendance Cards  */}
                        <div>
                            <div className='grid grid-cols-2 gap-4 sm:grid-cols-6 mt-12'>
                                <AttendanceCard />
                                <AttendanceCard />
                                <AttendanceCard />
                                <AttendanceCard />
                                <AttendanceCard />
                                <AttendanceCard />
                            </div>
                            <div className='mt-5 flex justify-center items-center'>
                                <Pagination showControls total={10} initialPage={1} radius='sm' variant="fade" color="success" />
                            </div>
                        </div>
                        {/* Attendance List  */}
                        <h1 className='mt-16 text-[30px] font-bold'>Attendance List</h1>
                        <div className="w-full overflow-x-auto">
                            <table class="table-auto w-full dark:bg-[#C8E1F91A] dark:rounded-xl">
                                <thead>
                                    <tr className=''>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Employy Number</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Employy Name</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Department</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Date</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Login Time</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Logout Time</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t-2  border-b-2'>
                                        <td className='p-5 text-[12px] md:text-[16px] font-normal text-center'>5570</td>
                                        <td className='p-5'>
                                            <div className="flex justify-start flex-col md:flex-row items-center gap-3">
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 md:w-12 md:h-12 text-tiny" />
                                                </div>
                                                <div>
                                                    <h1 className='text-[12px] md:text-[16px] font-normal'>Elvis Moren</h1>
                                                    <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>UX Designer</h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>Elvis Moren</h1>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>UX Designer</h3>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>Elvis Moren</h1>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>UX Designer</h3>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:30AM</h1>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <button className='bg-[#ffeec3] rounded-[20px]  text-[#E2B133] font-extrabold text-[10px] md:text-[12px] p-1 text-center block w-[100%] md:w-[55%]'>ON DUTY</button>
                                        </td>
                                        <td className='p-5'>
                                            <Link to="/admin/attendance/view" className='border border-[#1A932E] rounded-[20px] w-[100%] md:w-[75%] text-[14px] md:text-[16px] p-1 text-center block text-[#1A932E] dark:border-white dark:text-white'>View</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </children>
            </AdminLayout>
        </>
    );
}

export default Attendance;
