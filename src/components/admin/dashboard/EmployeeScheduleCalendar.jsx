import React from 'react';
import FullDay from './FullDay';
import FullDayLarge from './FullDayLarge';
import profile from '../../../assets/Images/profile/profile.webp';
import hani from '../../../assets/Images/profile/ellipse79.webp';
import umair from '../../../assets/Images/profile/umair.webp';
import waleed from '../../../assets/Images/profile/waleed.webp';
import arshaq from '../../../assets/Images/profile/arshaq.webp';
import mellisa from '../../../assets/Images/profile/mellisa.webp';
import victoria from '../../../assets/Images/profile/victoria.webp';
import derek from '../../../assets/Images/profile/derek.webp';
import RemoteShift from './RemoteShift';
import VacationFloatcard from './VacationFloatcard';


function EmployeeScheduleCalendar() {
  return (
    <div className="lg:w-[95%] w-[1100px] lg:ml-[35px] overflow-y-scroll lg:overflow-hidden">

      <div className="flex w-full">
        <div className="border-1 h-[60px] flex-grow basis-[26.67%]">
          <div className="mt-[15px] flex items-center gap-[10px]">
            <h4 className='font-extrabold text-[14px] ml-[15px] font-dm-sans text-[#121D22] dark:text-white'>Employee Name</h4>
            <div className="border-1 rounded-[50%] flex justify-center items-center py-[2px] px-[7px] "><p className='text-[#9F9EA4] font-bold text-[12px] dark:text-white'>96</p></div>
          </div>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>1</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Mon</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>2</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Tue</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>3</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>wed</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>4</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Thu</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>5</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Fri</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>6</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Sat</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>7</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Sun</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>8</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Mon</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>9</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Tue</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>10</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Wed</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>11</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Thu</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>12</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Fri</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>13</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Sat</p>
        </div>
        <div className="flex-grow justify-center items-center flex flex-col border-1 basis-[4.67%]">
          <p className='text-[18px] font-dm-sans font-medium'>14</p>
          <p className='text-[12px] font-dm-sans font-normal text-[#9D9CA3]'>Sun</p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="h-[32px] border-l-1 flex gap-[14px] dark:bg-[#222222] dark:bg-[#222222]  bg-[#F5FBF5] flex-grow basis-[26.67%]">
          <div className="ml-[15px] mt-[5px]"><input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          /></div>
          <div className=""><p className='mt-[5px] text-[#799F79] font-bold text-[14px] text-[#799F79] font-dm-sans'>MARKETING TEAM</p></div>

        </div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5]  dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222]  flex-grow basis-[4.67%] border-r-1"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={profile} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white ' >Izzah Fayyaz</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className="absolute w-[100%] top-[5%] left-[64%]">
          <FullDay />

        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa]  dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa]  dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={hani} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans  dark:text-white' >Hani Shah</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={umair} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white' >Umair</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className="w-[10%] absolute top-[4%] left-[30%] pointer-cursor">
          <VacationFloatcard />
        </div>

        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={waleed} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white' >Waleed</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className="w-[100%] absolute top-[4%] left-[38%]">
          <RemoteShift />
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className="w-[100%] absolute top-[4%] left-[64%]">
          <FullDayLarge />
        </div>


        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={arshaq} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white ' >Arshaq</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className="absolute top-[4%] left-[27.5%] w-[100%]">

          <FullDay />
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className="w-[100%] absolute top-[4%] left-[64%]">
          <FullDayLarge />
        </div>

        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={mellisa} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white' >Melissa Bradley</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" w-[15.2%] absolute top-[5%] left-[64%] bg-[#ebf2f3] rounded-[4px] border-[#337E89] border-1 h-[30px]">
          <p className='font-dm-sans font-bold text-[12px] text-[#1760EC] mt-[5px] ml-[8px]'>Morning</p>
        </div>

        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={victoria} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white' >Victoria Griffin</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className=" w-[20.2%] absolute top-[35%] left-[64%] bg-[#e5e5e5] rounded-[4px] border-[#337E89] border-1 h-[30px]">
          <p className='font-dm-sans font-bold text-[12px] text-[#00000] mt-[5px] ml-[8px]'>Evening</p>
        </div>

        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

      <div className="flex w-full">
        <div className="h-[32px] border-l-1 flex gap-[14px] bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[26.67%]">
          <div className="ml-[15px] mt-[5px]"><input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          /></div>
          <div className=""><p className='mt-[5px] text-[#8797B6] font-bold text-[14px] text-[#799F79] font-dm-sans'>DEPARETMENT TEAM</p></div>

        </div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%]"></div>
        <div className=" bg-[#F5FBF5] dark:bg-[#222222] flex-grow basis-[4.67%] border-r-1"></div>
      </div>
      <div className="flex w-full relative">
        <div className="border-1 h-[60px] flex items-center gap-[14px] flex-grow basis-[26.67%]">
          <input type="checkbox"
            className="w-4 ml-[15px] h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <img src={derek} alt="" />
          <div className="">
            <h3 className='text-[14px] font-medium text-[#000000] font-dm-sans dark:text-white' >Derek Larson</h3>
            <h3 className='text-[10px] font-normal font-dm-sans text-[#7A7C7E] dark:text-white' >@ghtrio</h3>
          </div>
        </div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>

        <div className="w-[23%] absolute top-[4%] left-[27.5%] pointer-cursor">
          <VacationFloatcard />
        </div>


        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
        <div className=" flex-grow basis-[4.67%] border-1 bg-[#fafafa] dark:bg-[#484e55]"></div>
      </div>

    </div>
  );
}

export default EmployeeScheduleCalendar;
