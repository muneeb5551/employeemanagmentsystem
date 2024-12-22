import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "@nextui-org/react";
import AdminLayout from '@/layouts/admin/AdminLayout';

const Users = () => {
    return (
        <>
            <AdminLayout title="Users">
                <children>
                    <div className="w-[95%] mx-auto mt-7">
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                            <div>
                                <h1 className='text-[60px] md:text-[50px] font-bold'>Users</h1>
                            </div>
                            <div className='mx-auto md:mx-0'>
                                <Link to="/admin/users/create" className='text-white bg-[#00AF65] px-[35px] py-[10px] rounded-[16px] text-[14px] font-bold'>Add User</Link>
                            </div>
                        </div>
                        {/* Admin Users Table */}
                        <div className="w-full overflow-x-auto rounded-[20px] border-2 mt-5">
                            <table class="table-auto w-full  dark:bg-[#C8E1F91A] dark:rounded-xl">
                                <thead className='bg-black'>
                                    <tr className='bg-black'>
                                        <th className='text-start p-4 text-[12px] md:text-[16px] font-medium text-white dark:text-white' colspan="5">Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Name</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Level</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Account Created Date</th>
                                        <th className='text-center p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Actions</th>
                                    </tr>
                                    <tr className='border-t-2'>
                                        <td className='px-5 py-2'>
                                            <div className="flex justify-start flex-col md:flex-row items-center gap-3">
                                                <div className='hidden md:block'>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 md:w-10 md:h-10 text-tiny" />
                                                </div>
                                                <div>
                                                    <h1 className='text-[12px] md:text-[16px] font-normal'>Elvis Moren</h1>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-5 text-[12px] md:text-[16px] font-normal text-start'>Admin</td>
                                        <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>02 -11-2021</h1>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <Link to="/admin/users/edit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                                </svg>

                                            </div>
                                        </td>
                                        {/* <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:30AM</h1>
                                            </div>
                                        </td> */}
                                        {/* <td className='p-5'>
                                            <button className='bg-[#ffeec3] rounded-[20px]  text-[#E2B133] font-extrabold text-[10px] md:text-[12px] p-1 text-center block w-[100%] md:w-[55%]'>ON DUTY</button>
                                        </td>
                                        <td className='p-5'>
                                            <Link to="/admin/attendance/view" className='border border-[#1A932E] rounded-[20px] w-[100%] md:w-[75%] text-[14px] md:text-[16px] p-1 text-center block text-[#1A932E] dark:border-white dark:text-white'>View</Link>
                                        </td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Employee Users Table */}
                        <div className="w-full overflow-x-auto rounded-[20px] border-2 mt-5">
                            <table class="table-auto w-full  dark:bg-[#C8E1F91A] dark:rounded-xl">
                                <thead className='bg-black'>
                                    <tr className='bg-black'>
                                        <th className='text-start p-4 text-[12px] md:text-[16px] font-medium text-white dark:text-white' colspan="5">Employee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Name</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Level</th>
                                        <th className='text-start p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Account Created Date</th>
                                        <th className='text-center p-5 text-[12px] md:text-[16px] font-bold text-[#4F4747] dark:text-white'>Actions</th>
                                    </tr>
                                    <tr className='border-t-2'>
                                        <td className='px-5 py-2'>
                                            <div className="flex justify-start flex-col md:flex-row items-center gap-3">
                                                <div className='hidden md:block'>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 md:w-10 md:h-10 text-tiny" />
                                                </div>
                                                <div>
                                                    <h1 className='text-[12px] md:text-[16px] font-normal'>Elvis Moren</h1>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-5 text-[12px] md:text-[16px] font-normal text-start'>Admin</td>
                                        <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>02 -11-2021</h1>
                                            </div>
                                        </td>
                                        <td className='p-5'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <Link to="/admin/users/edit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                        <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                                </svg>

                                            </div>
                                        </td>
                                        {/* <td className='p-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:30AM</h1>
                                            </div>
                                        </td> */}
                                        {/* <td className='p-5'>
                                            <button className='bg-[#ffeec3] rounded-[20px]  text-[#E2B133] font-extrabold text-[10px] md:text-[12px] p-1 text-center block w-[100%] md:w-[55%]'>ON DUTY</button>
                                        </td>
                                        <td className='p-5'>
                                            <Link to="/admin/attendance/view" className='border border-[#1A932E] rounded-[20px] w-[100%] md:w-[75%] text-[14px] md:text-[16px] p-1 text-center block text-[#1A932E] dark:border-white dark:text-white'>View</Link>
                                        </td> */}
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

export default Users;
