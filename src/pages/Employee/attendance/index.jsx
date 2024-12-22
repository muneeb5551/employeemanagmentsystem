import React from 'react';
import EmployeeLayout from '@/layouts/employee/EmployeeLayout';
import Box from '@/components/employee/attendance/Box';
import Icon from '@/assets/Images/Icons/employeeAttandanceIcon.png';
import UpArrow from '@/assets/Images/Icons/UpArrowIcon.png';
import FilterIcon from '@/assets/Images/Icons/FilterIcon.png';
import RequestLeave from '../../../components/employee/attendance/RequestLeave';

const EmployeeAttendance = () => {
  return (
    <>
      <EmployeeLayout  title="Timetable">
        <children>
          <div className="w-[95%] mx-auto mt-7">
            <h1 className='text-[30px] font-bold'>19 Dec 2024</h1>
            <h1 className='text-center text-[50px] font-extrabold'>02:12:01</h1>
            <div className='flex justify-center items-center mt-5'>
              <button className='bg-[#00AF65] text-white rounded-lg px-10 py-3 text-[14px] font-extrabold'>Clock In</button>
            </div>
            <div>
              <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mt-5'>
                <Box image={Icon} arrow={UpArrow} leaveType="Total Leaves" noOfLeaves="12" leaveDetail="12% increase from last month" bgColor="#D398E7" />
                <Box image={Icon} arrow={UpArrow} leaveType="Paid Leaves" noOfLeaves="12" leaveDetail="12% increase from last month" bgColor="#E89271" />
                <Box image={Icon} arrow={UpArrow} leaveType="Unpaid Leaves" noOfLeaves="12" leaveDetail="12% increase from last month" bgColor="#70A1E5" />
                <Box image={Icon} arrow={UpArrow} leaveType="Earned Leaves" noOfLeaves="12" leaveDetail="12% increase from last month" bgColor="#F0C274" />
              </div>
            </div>
            <RequestLeave />
            <div className='bg-[#F8F8F8] dark:bg-[#C8E1F91A] rounded-xl mt-5 mb-5 overflow-x-auto'>
              {/* Filter Div  */}
              <div className='flex flex-col md:flex-row justify-between items-center p-5'>
                <div className='w-[100%] md:w-[20%]'>
                  <h1 className='text-[12px] md:text-[16px] text-[#252C58] dark:text-white'>Attendance Overview</h1>
                </div>

                <div className='flex justify-between items-center gap-3 w-[100%] md:w-[60%]'>
                  <div className='flex justify-start items-center gap-5'>
                    <div className='flex justify-start items-center gap-1'>
                      <input type="radio" name="attendanceView" id="AllView" className='cursor-pointer appearance-none w-1 h-1 md:w-3 md:h-3 border border-[#20285A] dark:border-white rounded-[50%] checked:bg-[#00AF65] checked:border-0' />
                      <label htmlFor="AllView" className='text-[8px] md:text-[16px] font-[#20285A] font-light cursor-pointer'>All</label>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                      <input type="radio" name="attendanceView" id="PresentView" className='cursor-pointer appearance-none w-1 h-1 md:w-3 md:h-3 border border-[#20285A] dark:border-white rounded-[50%] checked:bg-[#00AF65] checked:border-0' />
                      <label htmlFor="PresentView" className='text-[8px] md:text-[16px] font-[#20285A] font-light cursor-pointer'>Present</label>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                      <input type="radio" name="attendanceView" id="HalfDayView" className='cursor-pointer appearance-none w-1 h-1 md:w-3 md:h-3 border border-[#20285A] dark:border-white rounded-[50%] checked:bg-[#00AF65] checked:border-0' />
                      <label htmlFor="HalfDayView" className='text-[8px] md:text-[16px] font-[#20285A] font-light cursor-pointer'>Half Day</label>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                      <input type="radio" name="attendanceView" id="AbsentView" className='cursor-pointer appearance-none w-1 h-1 md:w-3 md:h-3 border border-[#20285A] dark:border-white rounded-[50%] checked:bg-[#00AF65] checked:border-0' />
                      <label htmlFor="AbsentView" className='text-[8px] md:text-[16px] font-[#20285A] font-light cursor-pointer'>Absent</label>
                    </div>
                  </div>
                  <div>
                    <input type="date" name="" id="" className='appearance-none p-1  md:p-2 bg-white rounded-lg border dark:bg-black' />
                  </div>
                  <div>
                    <button className='flex justify-center items-center text-[6px] md:text-[14px] bg-[#00AF65] py-2 px-3 md:py-3  md:px-5 text-white rounded-lg gap-2'>
                      <img src={FilterIcon} alt="" className='w-[6px] md:w-[15px]' />
                      View Attendence
                    </button>
                  </div>

                </div>
              </div>

              <table className='w-full mb-5 overflow-x-auto'>
                <thead>
                  <tr className='bg-black rounded-lg text-white'>
                    <td className='text-[14px] font-normal py-5 px-5'>Date</td>
                    <td className='text-[14px] font-normal p-3'>Day</td>
                    <td className='text-[14px] font-normal p-3'>Clock-in</td>
                    <td className='text-[14px] font-normal p-3'></td>
                    <td className='text-[14px] font-normal p-3'>Clock-out</td>
                    <td className='text-[14px] font-normal p-3'>Work hours</td>
                    <td className='text-[14px] font-normal p-3'>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b-1'>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>29 July 2023</td>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>Monday</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>09:00</td>
                    <td className='text-[14px] font-normal py-5 px-5'>.........</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>18:00</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>10h 2m</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>
                      <div className='text-[14px] font-semibold text-[#0764E6] bg-[#E6EFFC] rounded-lg py-2 px-2 inline-block text-center'>
                        Work from office
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b-1'>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>29 July 2023</td>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>Monday</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>09:00</td>
                    <td className='text-[14px] font-normal py-5 px-5'>.........</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>18:00</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>10h 2m</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>
                      <div className='text-[14px] font-semibold text-[#0764E6] bg-[#E6EFFC] rounded-lg py-2 px-2 inline-block text-center'>
                        Work from office
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b-1'>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>29 July 2023</td>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>Monday</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>09:00</td>
                    <td className='text-[14px] font-normal py-5 px-5'>.........</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>18:00</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>10h 2m</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>
                      <div className='text-[14px] font-semibold text-[#0764E6] bg-[#E6EFFC] rounded-lg py-2 px-2 inline-block text-center'>
                        Work from office
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b-1'>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>29 July 2023</td>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>Monday</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>09:00</td>
                    <td className='text-[14px] font-normal py-5 px-5'>.........</td>
                    <td className='text-[14px] font-semibold text-[#00AF65] py-5 px-5'>18:00</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>10h 2m</td>
                    <td className='text-[14px] font-semibold py-5 px-5'>
                      <div className='text-[14px] font-semibold text-[#0764E6] bg-[#E6EFFC] rounded-lg py-2 px-2 inline-block text-center'>
                        Work from office
                      </div>
                    </td>
                  </tr>
                  <tr className=''>
                    <td className='text-[14px] font-semibold text-[#252C58] dark:text-white py-5 px-5'>Page 1 of 100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </children>
      </EmployeeLayout>
    </>
  );
}

export default EmployeeAttendance;
