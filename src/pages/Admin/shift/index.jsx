import React from 'react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import UpdatesIcon from '@/assets/Images/Icons/UpdatesBTNIcon.webp'
import FilterBTNIcon from '@/assets/Images/Icons/FilterBTNIcon.webp'
import FilterDropdownIcon from '@/assets/Images/Icons/FilterDropDownIcon.webp'
import dropicon from '../../../assets/Images/Icons/arrow-down.webp'
import ellipsepic from '../../../assets/Images/profile/ellipse79.webp';
import { Link } from 'react-router-dom';
import Addshift from '../../../components/admin/shift/Addshift';
import ProfileCard from "../../../components/admin/shift/Profilecard";
import FilterButton from "../../../components/admin/shift/FilterButton";
import ScheduleChart from '../../../components/admin/shift/ScheduleChart';
import Chart from '../../../components/admin/shift/Chart';
import GaugeChart from '../../../components/admin/shift/GaugeChart';


const Shifts = () => {
  return (
    <>
      <AdminLayout title="Shifts">
        <children>
          <div className="lg:w-[95%] w-[100%] mx-auto mt-7 ml-[10px] lg:ml-[25px] text-[60px] font-bold font-dm-sans">
            Shifts
          </div>

          <div className="justify-between items-center lg:mr-16 gap-2  lg:flex">
            <ProfileCard />

            <div className="flex ml-[10px] gap-2">

              <FilterButton />
              <Addshift />

            </div>
          </div>

          <div className="lg:w-[93%] w-[97%] lg:ml-[30px] mt-[30px]">
            <div className="mb-[70px]">
            <ScheduleChart />
            </div>
          </div>
            <div className="bg-[#F5F6F7] w-[100%] dark:bg-black">
            <h1 className='font-dm-sans tracking-wide py-[50px] pl-[30px] text-[60px] dark:text-white font-bold'>Employee details</h1>
            <div className="lg:flex w-[97%] lg:w-[93%] lg:pb-[100px] mt-[30px] lg:ml-[30px] ml-[1px] justify-between">
              <GaugeChart />
              <div className="lg:w-[50]">

              <Chart />
              </div>
            </div>
            </div>
        </children>
      </AdminLayout>
    </>
  );
}

export default Shifts;
