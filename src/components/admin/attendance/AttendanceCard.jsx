import React from 'react';
import AttendanceCardImage from '@/assets/Images/Icons/attendanceCardImage.png'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const AttendanceCard = () => {
    return (
        <>
            <Card shadow='sm' radius='sm' className="dark:bg-[#C8E1F91A] dark:hover:bg-[#00AF65] py-4 bg-white w-[200px] md:min-w-[200px] min-w-[170px] max-w-[15%] text-center rounded-xl p-5 hover:bg-[#00AF65] transition duration-300 ease-in-out cursor-pointer group">
                <div className="image text-center flex justify-center flex-col items-center">
                    <div className="w-[50px] h-[50px] mb-3">
                        <img src={AttendanceCardImage} className='w-full' alt="" />
                    </div>
                    <h1 className='text-[12px] font-medium text-[#050505] group-hover:text-white transition-colors dark:text-white'>ELVIS MOREN</h1>
                    <h2 className='text-[12px] font-medium text-[#4F4747] group-hover:text-white transition-colors'>Ux Designer</h2>
                </div>
                <div className='flex justify-center items-center gap-5 mt-5 mb-5'>
                    <div className=''>
                        <div className="">
                            <h1 className='bg-[#F1F4F9] w-[35px] h-[35px] rounded-[50%] flex justify-center items-center text-[12px] font-bold dark:text-black'>80%</h1>
                        </div>
                        <h1 className='text-[10px] font-medium group-hover:text-white transition-colors mt-2'>Month</h1>
                    </div>
                    <div>
                        <div className="">
                            <h1 className='bg-[#009D19] w-[35px] h-[35px] rounded-[50%] flex justify-center items-center text-[12px] font-bold '>90%</h1>
                        </div>
                        <h1 className='text-[10px] font-medium group-hover:text-white transition-colors mt-2'>Year</h1>
                    </div>
                </div>
                <div>
                    <Link exact to="/admin/attendance/details" className='text-[11px] md:text-[14px] border mt-3 border-[#1A932E] rounded-[50px] p-1 w-[100%] text-[#1A932E] group-hover:border-[white] group-hover:text-white transition-colors dark:border-white dark:text-white'>Attendance Details</Link>
                </div>
            </Card>
        </>
    );
}

export default AttendanceCard;
