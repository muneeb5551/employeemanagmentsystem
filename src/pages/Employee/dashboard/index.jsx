import React from 'react';
import EmployeeLayout from '@/layouts/employee/EmployeeLayout';
import weatherIcon from '../../../assets/Images/Icons/EmployeeWeathericon.png';
import ThreeDotIcon from '../../../assets/Images/Icons/ThreeDotIcon.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import AttendanceLineChart from '../../../components/employee/dashboard/AttendanceLineChart';
import AttendanceComparisonChart from '../../../components/employee/dashboard/AttendanceComparisonChart';
import WeeklyAttendanceChart from '../../../components/employee/dashboard/WeeklyAttendanceChart';
import GaugeChart from '../../../components/admin/shift/GaugeChart';
import Chart from '../../../components/admin/shift/Chart';
import filter from '../../../assets/Images/Icons/filter-icon.webp';
import TimeframeSelector from '../../../components/employee/dashboard/TimeFrameSelector';

const EmployeeDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Get the appropriate suffix for the day
    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // covers 4-20
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };
  return (
    <>
      <EmployeeLayout title="Dashboard">
        <children>
          <div className="w-[95%] mx-auto mt-7">
            <h1 className='text-[40px] font-bold'>Hello Arshaq !</h1>
            <div className="flex flex-col md:flex-row justify-between gap-5 mt-5">
              <div className='w-[100%] md:w-[20%] bg-gray-100 dark:bg-[#151719] rounded-xl p-5'>
                <div className='flex justify-start items-center gap-2'>
                  <div>
                    <img src={weatherIcon} alt="" className='' />
                  </div>
                  <div>
                    <h1 className='text-[24px] font-normal dark:text-white text-[#252C58]'>{time.toLocaleTimeString()}</h1>
                    <p className='text-[12px] font-normal dark:text-white text-[#252C58]'>Realtime Insight</p>
                  </div>
                </div>
                <div className='mt-10'>
                  <h1 className='text-[18px] font-extrabold dark:text-white text-[#252C58]'>Today:</h1>
                  <h1 className='text-[18px] font-extrabold dark:text-white text-[#252C58]'>{formatDate(currentDate)}</h1>
                </div>
                <div className='mt-10 w-[100%]'>
                  <Link className='bg-[#1A932E] p-3 text-white rounded-[10px] text-[16px] w-[100%] block text-center'>View Attendence</Link>
                </div>
              </div>
              {/* ******************************* */}
              <div className='w-[100%]  md:w-[80%] bg-gray-100 dark:bg-[#151719] rounded-xl p-5'>
                <div className='flex justify-between'>
                  <div className='flex justify-start items-center gap-3'>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-20 h-20 text-tiny" />
                    <div>
                      <h1 className='text-[22px] font-bold'>Abdullah Nasir</h1>
                      <h1 className='text-[14px] '>Lahore</h1>
                    </div>
                  </div>
                  <div>
                    <img src={ThreeDotIcon} alt="" />
                  </div>
                </div>

                <div className='mt-5'>
                  <div className='mt-4'>
                    <Progress
                      label="January"
                      size="md"
                      value={4000}
                      maxValue={10000}
                      color="success"
                      formatOptions={{ style: "currency", currency: "PKR" }}
                      showValueLabel={true}
                      className="w-[100%]"
                    />
                  </div>
                  <div className='mt-4'>
                    <Progress
                      label="Feburary"
                      size="md"
                      value={3000}
                      maxValue={10000}
                      color="success"
                      formatOptions={{ style: "currency", currency: "PKR" }}
                      showValueLabel={true}
                      className="w-[100%]"
                    />
                  </div>
                  <div className='mt-4'>
                    <Progress
                      label="March"
                      size="md"
                      value={8000}
                      maxValue={10000}
                      color="success"
                      formatOptions={{ style: "currency", currency: "PKR" }}
                      showValueLabel={true}
                      className="w-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <AttendanceLineChart />
            </div>
            <div className="lg:flex items-center justify-between lg:mt-[20px] mt-[20px] lg:my-[20px]">

              <div className="w-[100%] lg:w-[60%] bg-[#f5f6f7] dark:bg-[#151719] py-[50px] px-[20px]  lg:p-[25px] mt-[10px] rounded-[15px]">
                <div className="flex justify-between items-center mb-[20px] lg:mb-[20px]">
                <p className='text-[#000000] font-normal text-[14px] dark:text-white lg:text-[16px] font-dm-sans'>Attendance Comparison Chart</p>
                <TimeframeSelector />
                <img src={filter} className='hover:cursor-pointer ml-2' alt="" />
                </div>
                <AttendanceComparisonChart />
              </div>

              <div className="w-[100%] lg:w-[32%] bg-[#f5f6f7] dark:bg-[#151719] mt-[10px] p-[25px] rounded-[15px]">
                <div className=" flex items-center justify-between mb-[10px]">

                <p className='text-[#000000] font-normal text-[16px] dark:text-white font-dm-sans'>Weekly Attendance</p>
                <img src={filter} className='hover:cursor-pointer' alt="" />
                </div>
                <WeeklyAttendanceChart />
              </div>
            </div>

            <div className="lg:flex items-start justify-between">
              <div className="w-[100%] lg:w-[40%] mt-[15px] ">
                <GaugeChart />
              </div>
              <div className="w-[100%] lg:w-[40%] mt-[15px] ">
                <Chart />
              </div>
            </div>
          </div>
        </children>
      </EmployeeLayout>
    </>
  );
}

export default EmployeeDashboard;
