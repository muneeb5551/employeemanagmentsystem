import React from 'react';
import { Avatar } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import AdminLayout from '../../../layouts/admin/AdminLayout';

const View = () => {
    return (
        <>
            <AdminLayout>
                <children>
                    <div className="w-[95%] mx-auto border-4 border-[#e4e5e6] rounded-lg px-5 py-5 mt-12 dark:bg-[#C8E1F91A]">
                        <div className="w-[100%] mx-auto mt-7 flex flex-col md:flex-row justify-start md:justify-between items-center">
                            <h1 className='text-[20px] font-medium'>Attendance Details</h1>
                            <div className="flex justify-end items-center gap-5">
                                <div className="flex justify-end items-center gap-5">
                                    <h1 className='bg-[#f0f1f1] px-12 py-5 rounded-[10px] text-[16px] text-black border-2 border-[#D5D9DD]'>
                                        <input type="date" className='appearance-none bg-[#f0f1f1] focus:outline-none' />
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* Attendance Table */}
                        <div className="w-full overflow-x-auto mt-7">
                            <table class="table-auto w-full">
                                <thead>
                                    <tr className='border-t-2'>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>ID</th>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Ename</th>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Role</th>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Check-in</th>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Check-out</th>
                                        <th className='text-start py-5 text-[12px] md:text-[16px] font-medium text-[#4F4747] dark:text-white'>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-t-4  border-b-2'>
                                        <td className='py-5 text-[12px] md:text-[16px] font-normal text-start'>5570</td>
                                        <td className='py-5'>
                                            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                                                <div>
                                                    <h1 className='text-[12px] md:text-[12px] font-normal'>Elvis Moren</h1>
                                                </div>
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="md:w-12 md:h-12  w-6 h-6 text-tiny" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>Graphic Designer</h3>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>18:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <h1 className='text-[12px] md:text-[16px] font-normal'>17-05-2024</h1>
                                        </td>
                                    </tr>
                                    <tr className='border-t-2  border-b-2'>
                                        <td className='py-5 text-[12px] md:text-[16px] font-normal text-start'>5570</td>
                                        <td className='py-5'>
                                            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                                                <div>
                                                    <h1 className='text-[12px] md:text-[12px] font-normal'>Elvis Moren</h1>
                                                </div>
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="md:w-12 md:h-12  w-6 h-6 text-tiny" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>Graphic Designer</h3>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>18:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <h1 className='text-[12px] md:text-[16px] font-normal'>17-05-2024</h1>
                                        </td>
                                    </tr>
                                    <tr className='border-t-2  border-b-2'>
                                        <td className='py-5 text-[12px] md:text-[16px] font-normal text-start'>5570</td>
                                        <td className='py-5'>
                                            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                                                <div>
                                                    <h1 className='text-[12px] md:text-[12px] font-normal'>Elvis Moren</h1>
                                                </div>
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="md:w-12 md:h-12  w-6 h-6 text-tiny" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>Graphic Designer</h3>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>18:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <h1 className='text-[12px] md:text-[16px] font-normal'>17-05-2024</h1>
                                        </td>
                                    </tr>
                                    <tr className='border-t-2  border-b-2'>
                                        <td className='py-5 text-[12px] md:text-[16px] font-normal text-start'>5570</td>
                                        <td className='py-5'>
                                            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                                                <div>
                                                    <h1 className='text-[12px] md:text-[12px] font-normal'>Elvis Moren</h1>
                                                </div>
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="md:w-12 md:h-12  w-6 h-6 text-tiny" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>Graphic Designer</h3>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>18:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <h1 className='text-[12px] md:text-[16px] font-normal'>17-05-2024</h1>
                                        </td>
                                    </tr>
                                    <tr className='border-t-2  border-b-2'>
                                        <td className='py-5 text-[12px] md:text-[16px] font-normal text-start'>5570</td>
                                        <td className='py-5'>
                                            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-3">
                                                <div>
                                                    <h1 className='text-[12px] md:text-[12px] font-normal'>Elvis Moren</h1>
                                                </div>
                                                <div>
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="md:w-12 md:h-12  w-6 h-6 text-tiny" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h3 className='text-[12px] md:text-[16px] font-normal text-[#A49999]'>Graphic Designer</h3>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>09:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h1 className='text-[12px] md:text-[16px] font-normal'>18:00</h1>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <h1 className='text-[12px] md:text-[16px] font-normal'>17-05-2024</h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='mt-5 mb-5 flex justify-center items-center'>
                        <Pagination showControls total={10} initialPage={1} radius='sm' variant="fade" color="success" />
                    </div>
                </children>
            </AdminLayout>
        </>
    );
}

export default View;
