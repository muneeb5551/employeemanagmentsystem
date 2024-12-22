import React from 'react';
import FirstnameIcon from '@/assets/Images/Icons/fname.png';
import CalendarIcon from '@/assets/Images/Icons/date.png';
import CNIC from '@/assets/Images/Icons/CNICIcon.png';
import Emailcon from '@/assets/Images/Icons/EmailIcon.png';
import PhoneIcon from '@/assets/Images/Icons/PhoneIcon.png';
import CityIcon from '@/assets/Images/Icons/CityIcon.png';
import AddressIcon from '@/assets/Images/Icons/AddressIcon.png';
import DegreeIcon from '@/assets/Images/Icons/DegreeIcon.png';
import UniversityIcon from '@/assets/Images/Icons/UniversityIcon.png';
import BankIcon from '@/assets/Images/Icons/BankIcon.png';
import PasswordIcon from '@/assets/Images/AuthenticationScreen/Icons/PasswordIcon.webp';
import Styles from '@/assets/CSS/sub-pages/createuser.module.css';
import { Link } from 'react-router-dom';
import AdminLayout from '@/layouts/admin/AdminLayout';

const CreateUser = () => {
    return (
        <>
            <AdminLayout title="Create User">
                <children>
                    <div className="w-[95%] mx-auto mt-7">
                        <div className='flex justify-between items-center w-full'>
                            <div>
                                <h1 className='text-[60px] md:text-[50px] font-bold'>Users Info</h1>
                            </div>
                        </div>
                        {/* Form Started Here */}
                        <div className='w-full'>
                            <form action="">
                                {/* Row # 1 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="fname" className='text-[16px] text-black font-semibold'>First Name</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter first name.....' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Last Name</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter last name.....' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 2 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="fathername" className='text-[16px] text-black font-semibold'>Father Name</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter father name.....' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <div className="flex justify-between items-center gap-3">
                                            <div className='w-[50%]'>
                                                <label htmlFor="Gender" className='text-[16px] text-black font-semibold'>Gender</label><br />
                                                <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                                    <option value="Your Gender">Your Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="Custom">Custom</option>
                                                </select>
                                            </div>
                                            <div className='w-[50%]'>
                                                <label htmlFor="Date of Birth" className='text-[16px] text-black font-semibold'>Date of Birth</label><br />
                                                <div className='relative'>
                                                    <input type="date" className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                                    <img src={CalendarIcon} alt="" className={Styles.customInputImageCenter} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 3 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <div className='w-[100%]'>
                                            <label htmlFor="Role" className='text-[16px] text-black font-semibold'>Designation</label><br />
                                            <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                                <option value="Your Gender">Select your designation</option>
                                                <option value="Male">Developer</option>
                                                <option value="female">Designer</option>
                                                <option value="Custom">SQA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <div className="flex justify-between items-center gap-3">
                                            <div className='w-[100%]'>
                                                <label htmlFor="Role" className='text-[16px] text-black font-semibold'>Role</label><br />
                                                <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                                    <option value="Your Gender">Select the Role</option>
                                                    <option value="Male">Admin</option>
                                                    <option value="female">Manager</option>
                                                    <option value="Custom">Employee</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 4 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="CNIC" className='text-[16px] text-black font-semibold'>CNIC  No.</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter CNIC ' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={CNIC} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <div className="flex justify-between items-center gap-3">
                                            <div className='w-[50%]'>
                                                <label htmlFor="Gender" className='text-[16px] text-black font-semibold'>Shift Time</label><br />
                                                <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                                    <option value="Your Gender">Your Shift</option>
                                                    <option value="Male">Day Shift</option>
                                                    <option value="female">Night Shift</option>
                                                </select>
                                            </div>
                                            <div className='w-[50%]'>
                                                <label htmlFor="Date of Birth" className='text-[16px] text-black font-semibold'>Date of Joining</label><br />
                                                <div className='relative'>
                                                    <input type="date" className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                                    <img src={CalendarIcon} alt="" className={Styles.customInputImageCenter} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 5 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Email" className='text-[16px] text-black font-semibold'>Email</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='name@gmail.com' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={Emailcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Password" className='text-[16px] text-black font-semibold'>Password</label><br />
                                        <div className='relative'>
                                            <input type="password" placeholder='...............' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={PasswordIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 6 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Mobile NO" className='text-[16px] text-black font-semibold'>Mobile NO</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter phone number' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={PhoneIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Password" className='text-[16px] text-black font-semibold'>Password</label><br />
                                        <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                            <option value="Your Gender">Select country</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Row # 7 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="City" className='text-[16px] text-black font-semibold'>City</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter your city' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={CityIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Address" className='text-[16px] text-black font-semibold'>Address</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter your address' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={AddressIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                </div>
                                {/* Qualification Tag */}
                                <div className='bg-black px-3 py-2 text-white rounded-[10px] w-[35%] md:w-[10%] text-center mt-10 mb-10 dark:bg-[#121212]'>
                                    <h1 className='text-[16px] font-semibold'>Qualification</h1>
                                </div>
                                {/* Row # 1 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Latest Degree" className='text-[16px] text-black font-semibold'>Latest Degree</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter your latest degree' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={DegreeIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="University" className='text-[16px] text-black font-semibold'>University</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter university name' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={UniversityIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 2 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Passing Year" className='text-[16px] text-black font-semibold'>Passing Year</label><br />
                                        <div className='relative'>
                                            <input type="date" placeholder='Enter your latest degree' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={CalendarIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <div className="flex justify-between items-center gap-3">
                                            <div className='w-[50%]'>
                                                <label htmlFor="Total Marks/CGPA" className='text-[16px] text-black font-semibold'>Total Marks/CGPA</label><br />
                                                <input type="text" placeholder='0/00.00' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            </div>
                                            <div className='w-[50%]'>
                                                <label htmlFor="Obtained" className='text-[16px] text-black font-semibold'>Obtained</label><br />
                                                <input type="text" placeholder='Enter obtained/CGPA' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Bank Details  Tag */}
                                <div className='bg-black px-3 py-2 text-white rounded-[10px] w-[35%] md:w-[10%] text-center mt-10 mb-10 dark:bg-[#121212]'>
                                    <h1 className='text-[16px] font-semibold'>Bank Details </h1>
                                </div>
                                {/* Row # 1 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Account Title " className='text-[16px] text-black font-semibold'>Account Title </label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter account title' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Account NO/IBN" className='text-[16px] text-black font-semibold'>Account NO/IBN</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter account number' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                </div>
                                {/* Row # 2 */}
                                <div className='flex justify-between items-center gap-3  md:gap-32 flex-col md:flex-row mt-3'>
                                    <div className="w-[100%] md:w-[50%]">
                                        <label htmlFor="Bank Name" className='text-[16px] text-black font-semibold'>Bank Name</label><br />
                                        <div className='relative'>
                                            <input type="text" placeholder='Enter bank name' className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                            <img src={BankIcon} alt="" className={Styles.customInputImageCenter} />
                                        </div>
                                    </div>
                                    <div className="w-[100%] md:w-[50%]">
                                    </div>
                                </div>
                                {/* Save and Cancel Buttons */}
                                <div className='flex justify-start items-center gap-3 my-10'>
                                    <Link className='text-[16px] bg-black px-4 py-2 text-white rounded-[10px] font-semibold dark:bg-[#121212]'>Save</Link>
                                    <Link to="/admin/users" className='text-[16px] bg-[#D9D9D9] px-4 py-2 text-black rounded-[10px] font-semibold'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </children>
            </AdminLayout>
        </>
    );
}

export default CreateUser;
