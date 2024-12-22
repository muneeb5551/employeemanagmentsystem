import React from 'react'
import AdminLayout from '@/layouts/admin/AdminLayout';
import profilepic from '../../assets/Images/profile/Ellipse-3247.webp';
import FirstnameIcon from '../../assets/Images/Icons/fname.png';
import mailicon from '../../assets/Images/Icons/EmailIcon.png';
import phoneicon from '../../assets/Images/Icons/PhoneIcon.png';
import passwordicon from '../../assets/Images/Icons/Vector.png';
import facebok from '../../assets/Images/CompanyLogo/facebook.webp';
import Linkedin from '../../assets/Images/CompanyLogo/linkedin.webp';
import skype from '../../assets/Images/CompanyLogo/skype.webp';
import Styles from '@/assets/CSS/sub-pages/createuser.module.css';





const Accounts = () => {
    return (
        <>
            <AdminLayout title="Accounts">
                <children>
                    <div className="w-[95%] mx-auto mt-7 lg:flex  justify-between">
                        {/* *******box1******* */}
                        <div className="lg:w-[48%] w-[100%] px-6 shadow-lg rounded-[10px] pb-[5px]">
                            <p className='text-[20px] font-bold py-5'>Umair Sanaullah</p>
                            <img src={profilepic} className='px-5' alt="" />
                            {/* *******row1******* */}
                            <div className="w-[100%] mt-10">
                                <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Name</label><br />
                                <div className='relative'>
                                    <input type="text" placeholder='Enter your name.....' className='border-1 w-[100%] rounded-lg p-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                    <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                </div>
                            </div>
                            {/* *******row2******* */}
                            <div className="w-[100%] mt-5">
                                <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Last Name</label><br />
                                <div className='relative'>
                                    <input type="text" placeholder='Enter your father name.....' className='border-1 w-[100%] rounded-lg p-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                    <img src={FirstnameIcon} alt="" className={Styles.customInputImageCenter} />
                                </div>
                            </div>
                            {/* *******row3******* */}
                            <div className="w-[100%] mt-5">
                                <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Email Address</label><br />
                                <div className='relative'>
                                    <input type="text" placeholder='abc234"gmail.com' className='border-1 w-[100%] rounded-lg p-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                    <img src={mailicon} alt="" className={Styles.customInputImageCentermail} />
                                </div>
                            </div>
                            {/* *******row4******* */}
                            <div className="w-[100%] mt-5">
                                <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Phone number</label><br />
                                <div className='relative'>
                                    <input type="text" placeholder='Enter your phone number' className='border-1 w-[100%] rounded-lg p-3 text-[14px] text-[#636363] mt-1 focus:outline-none' />
                                    <img src={phoneicon} alt="" className={Styles.customInputImageCenter} />
                                </div>
                            </div>
                            {/* *******row5******* */}

                            <div className='flex justify-between items-center gap-3 flex-col md:flex-row mt-3'>
                                <div className="w-[100%]">
                                    <div className='w-[100%]'>
                                        <label htmlFor="Role" className='text-[16px] text-black font-semibold'>Department</label><br />
                                        <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                            <option value="Your Gender">Select your designation</option>
                                            <option value="Male">Developer</option>
                                            <option value="female">Designer</option>
                                            <option value="Custom">SQA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* *******row6******* */}

                            <div className='flex justify-between items-center gap-3 flex-col md:flex-row mt-3'>
                                <div className="w-[100%]">
                                    <div className='w-[100%]'>
                                        <label htmlFor="Role" className='text-[16px] text-black font-semibold'>Language</label><br />
                                        <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                            <option value="Your Gender">Select your Language</option>
                                            <option value="Male">ENG</option>
                                            <option value="female">ENG</option>
                                            <option value="Custom">ENG</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* *******row7******* */}

                            <div className='flex justify-between items-center gap-3 flex-col md:flex-row mt-3'>
                                <div className="w-[100%]">
                                    <div className='w-[100%]'>
                                        <label htmlFor="Role" className='text-[16px] text-black font-semibold'>Direction</label><br />
                                        <select className='border-1 w-[100%] rounded-lg py-4 px-3 text-[14px] text-[#636363] mt-1 focus:outline-none' >
                                            <option value="Your Gender">Select your Direction</option>
                                            <option value="Male">ENG</option>
                                            <option value="female">ENG</option>
                                            <option value="Custom">ENG</option>
                                        </select>
                                    </div>
                                    {/* *******button******* */}

                                    <div className='flex justify-start items-center gap-3 my-5 mb-0 lg:ml-[490px]'>
                                        <button className='text-[16px] bg-black px-4 py-2 text-white rounded-[10px] font-semibold dark:bg-[#121212]'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* *******box2******* */}

                        <div className="lg:w-[48%] w-[100%] mt-[30px] lg:mt-[0px]">
                            <div className="px-6 shadow-lg rounded-[10px]">
                                <p className='text-[20px] font-bold pb-5'>Change password</p>
                                {/* *******row1******* */}

                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>*Enter old password</label><br />
                                    <div className='relative'>
                                        <input type="password" placeholder='***********' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={passwordicon} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>
                                {/* *******row2******* */}
                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>*New password</label><br />
                                    <div className='relative'>
                                        <input type="password" placeholder='***********' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={passwordicon} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>
                                {/* *******row3******* */}

                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>*Retype New password</label><br />
                                    <div className='relative'>
                                        <input type="password" placeholder='***********' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={passwordicon} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>
                                {/* *******button******* */}
                                <div className='flex justify-start items-center gap-3 py-5 lg:ml-[490px]'>
                                    <button className='text-[16px] bg-black px-4 py-2 pb text-white rounded-[10px] font-semibold dark:bg-[#121212]'>Save</button>
                                </div>
                            </div>

                            {/* *******box3******* */}
                            <div className="px-6 shadow-lg rounded-[10px] mt-[30px] lg:mt-[105px]">
                                <p className='text-[20px] font-bold pb-5'>Social Media Accounts</p>

                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Facebook</label><br />
                                    <div className='relative'>
                                        <input type="text" placeholder='' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={facebok} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>

                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Linkedin</label><br />
                                    <div className='relative'>
                                        <input type="text" placeholder='' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={Linkedin} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>

                                <div className="w-[100%] mt-5">
                                    <label htmlFor="lname" className='text-[16px] text-black font-semibold'>Skype</label><br />
                                    <div className='relative'>
                                        <input type="text" placeholder='' className='border-1 w-[100%] rounded-lg p-[8px] text-[18px] text-[#636363] mt-1 focus:outline-none' />
                                        <img src={skype} alt="" className={Styles.customInputImageCenter} />
                                    </div>
                                </div>

                                {/* *******button******* */}
                                <div className='flex justify-start items-center gap-3 py-5 lg:ml-[490px]'>
                                    <button className='text-[16px] bg-black px-4 py-2 pb text-white rounded-[10px] font-semibold dark:bg-[#121212]'>Save</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </children>
            </AdminLayout >



        </>
    )
}

export default Accounts;