import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Progress } from "@nextui-org/react";
import CalendarIcon from '@/assets/Images/Icons/calendar.png';
import dropicon from '../../../assets/Images/Icons/arrow-down.webp'
import ellipsepic from '../../../assets/Images/profile/ellipse79.webp'
import clock from '../../../assets/Images/Icons/clock.webp'
import development from '../../../assets/Images/CompanyLogo/development.webp';
import design from '../../../assets/Images/CompanyLogo/design.webp';
import circle from '../../../assets/Images/CompanyLogo/done.webp';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import TimeRangePicker from './TimeRangePicker';



const Addshift = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);


    
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            const [selected, setSelected] = useState(null); // To track the selected card
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const steps = [
        'Step 1',
        'Step 2',
        'Step 3',
        'Step 4',
        'Step 5'

    ];

    const handleSelect = (card) => {
        setSelected(card);
    };


    const [selected, setSelected] = useState(null);

    const progressWidth = ((currentStep + 1) / steps.length) * 100;
    return (
        <>
            <div className=''>
                <Button
                    onClick={handleOpen}
                    color="primary"
                    className='px-7 w-[140px] py-2 rounded-[16px] text-white bg-[#00AF65] flex justify-center items-center gap-2'
                >
                    ADD SHIFT
                </Button>
            </div>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                placement="top-center"
                size="3xl"
                onClose={handleClose}
                classNames={{
                    base: "bg-white dark:bg-black text-black dark:text-white",
                }}

            >

                <ModalContent className="">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[30px] font-semibold dark:text-white dark:bg-black">
                                <div className="flex justify-between dark:text-white dark:bg-black items-center gap-[10px] lg:p-10 p-2">
                                    {/* Step Indicators */}
                                    {steps.map((step, index) => (
                                        <React.Fragment key={index}>
                                            <span
                                                className={`w-[35px] h-[30px] flex justify-center items-center ${index <= currentStep ? 'bg-[#00AF65]' : 'bg-[#EFF0F6]'} rounded-[50%]`}
                                            >
                                                <p className='text-[16px] text-white'>{index + 1}</p>
                                            </span>
                                            {index < steps.length - 1 && (
                                                <div className="w-[15%] bg-gray-200 rounded-full h-[6px]">
                                                    <div
                                                        className={`bg-[#00AF65] dark:text-white dark:bg-black h-full ${index < currentStep ? 'w-full' : 'w-0'} rounded-full`}
                                                        style={{ width: `${progressWidth}%` }}
                                                    ></div>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <hr class="border-t border-gray-300 mb-[30px]" />


                            </ModalHeader>
                            <ModalBody className=''>

                                {currentStep === 0 && (
                                    <>
                                        <h1 className='text-[24px] font-sans font-bold dark:text-white dark:bg-black'>Shift Details</h1>
                                        <p className='font-normal text-[18px] font-sans dark:text-white dark:bg-black'>Lorem ipsum dolor sit amet consectetur adipisc.</p>
                                        <div className="lg:flex justify-between items-center">
                                            <div>
                                                <p className='font-medium text-[18px] font-sans pb-[10px] dark:text-white dark:bg-black'>Name</p>
                                                <UserDropdown />
                                            </div>
                                            <div>
                                                <p className='font-medium text-[18px] font-sans pb-[10px] dark:text-white dark:bg-black'>Rate per day</p>
                                                <div className="flex items-center gap-5 py-[12px] border border-[#EFF0F6] w-[321px] hover:cursor-pointer">
                                                    <div className="relative ml-4">
                                                        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[18px] text-gray-500 dark:text-white">$</span>
                                                        <input
                                                            type="text"
                                                            placeholder="13"
                                                            className="pl-8 font-dm-sans text-[18px] dark:text-white dark:bg-black focus:outline-none"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <TimeRangePicker />
                                    </>
                                )}
                                {currentStep === 1 && (
                                    <div>
                                        <div className="flex items-center gap-5 py-[12px] lg:ml-[230px] mt-[-40px] w-[321px] hover:cursor-pointer">
                                            <div className="lg:ml-[23px]">
                                                <img src={ellipsepic} alt="Profile" />
                                            </div>
                                            <div>
                                                <p className='font-dm-sans text-[14px]'>John Carter</p>
                                            </div>

                                        </div>

                                        <div className="lg:flex">
                                            <p className='font-sans font-bold text-[24px]'>Do you want to Add shift Margin ?</p>
                                            <div className="flex lg:ml-[50px] gap-[10px] lg:gap-[5px]">
                                                <button
                                                    className={`border-1 my-[7px] lg:mx-[10px] w-[35px] h-[28px] rounded-[3px] ${selected === "yes" ? "bg-[#00AF65] text-white" : "hover:bg-[#00AF65] hover:text-white"
                                                        }`}
                                                    onClick={() => setSelected("yes")}
                                                >
                                                    Yes
                                                </button>

                                                <button
                                                    className={`border-1 my-[7px] lg:mx-[10px] w-[35px] h-[28px] rounded-[3px] ${selected === "no" ? "bg-[#00AF65] text-white" : "hover:bg-[#00AF65] hover:text-white"
                                                        }`}
                                                    onClick={() => setSelected("no")}
                                                >
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                        <p className='text-[18px] font-sans font-normal text-[#6F6C90] py-[5px]'>If not then feel free to move to next step</p>

                                        <TimeRangePicker />
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div>
                                        <div className="flex items-center gap-5 py-[12px] lg:ml-[230px] mt-[-40px] w-[321px] hover:cursor-pointer">
                                            <div className="lg:ml-[23px]">
                                                <img src={ellipsepic} alt="Profile" />
                                            </div>
                                            <div>
                                                <p className='font-dm-sans text-[14px]'>John Carter</p>
                                            </div>

                                        </div>
                                        <p className='font-sans font-bold text-[24px]'>Applicable For ?</p>
                                        <p className='text-[18px] font-sans font-normal text-[#6F6C90] py-[5px]'>Please select Department that this shift is applicable for</p>


                                        <div>
                                            <div className="lg:flex gap-[30px] items-center mt-[30px]">
                                                <div
                                                    className={`w-[248px] rounded-[16px] border-[2px] py-[25px] flex justify-center items-center gap-[10px] hover:cursor-pointer ${selected === "development"
                                                        ? "border-[#00AF65] bg-[#d9f2e8]"
                                                        : "hover:border-[#00AF65]"
                                                        }`}
                                                    onClick={() => handleSelect("development")}
                                                >
                                                    <div className="w-[66px] h-[66px] rounded-[50px] bg-[#d9f2e8] flex justify-center items-center">
                                                        <img src={development} alt="Development" />
                                                    </div>
                                                    <p className="font-medium font-sans text-[18px] text-[#131216]">
                                                        Development
                                                    </p>
                                                </div>

                                                <div
                                                    className={`w-[248px] rounded-[16px] mt-[10px] lg:mt-0 border-[2px] py-[25px] flex justify-center items-center gap-[10px] hover:cursor-pointer ${selected === "webDesign"
                                                        ? "border-[#00AF65] bg-[#d9f2e8]"
                                                        : "hover:border-[#00AF65]"
                                                        }`}
                                                    onClick={() => handleSelect("webDesign")}
                                                >
                                                    <div className="w-[66px] h-[66px] rounded-[50px] bg-[#d9f2e8] flex justify-center items-center">
                                                        <img src={design} alt="Web Design" />
                                                    </div>
                                                    <p className="font-medium font-sans text-[18px] text-[#131216]">
                                                        Web Design
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="lg:flex gap-[30px] items-center lg:mt-[30px] mt-[10px]">
                                                <div
                                                    className={`w-[248px] rounded-[16px] border-[2px] py-[25px] flex justify-center items-center gap-[10px] hover:cursor-pointer ${selected === "marketing"
                                                        ? "border-[#00AF65] bg-[#d9f2e8]"
                                                        : "hover:border-[#00AF65]"
                                                        }`}
                                                    onClick={() => handleSelect("marketing")}
                                                >
                                                    <div className="w-[66px] h-[66px] rounded-[50px] bg-[#d9f2e8] flex justify-center items-center">
                                                        <img src={development} alt="Marketing" />
                                                    </div>
                                                    <p className="font-medium font-sans text-[18px] text-[#131216]">
                                                        Marketing
                                                    </p>
                                                </div>

                                                <div
                                                    className={`w-[248px] rounded-[16px] border-[2px] mt-[10px] lg:mt-0 py-[25px] flex justify-center items-center gap-[10px] hover:cursor-pointer ${selected === "other"
                                                        ? "border-[#00AF65] bg-[#d9f2e8]"
                                                        : "hover:border-[#00AF65]"
                                                        }`}
                                                    onClick={() => handleSelect("other")}
                                                >
                                                    <div className="w-[66px] h-[66px] rounded-[50px] bg-[#d9f2e8] flex justify-center items-center">
                                                        <img src={design} alt="Other" />
                                                    </div>
                                                    <p className="font-medium font-sans text-[18px] text-[#131216]">
                                                        Other
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div>
                                        <div className="flex items-center gap-5 py-[12px] lg:ml-[230px] mt-[-40px] w-[321px] hover:cursor-pointer">
                                            <div className="lg:ml-[23px]">
                                                <img src={ellipsepic} alt="Profile" />
                                            </div>
                                            <div>
                                                <p className='font-dm-sans text-[14px]'>John Carter</p>
                                            </div>
                                        </div>
                                        <p className='font-sans font-bold text-[24px]'>Weekend ?</p>
                                        <p className='text-[18px] font-sans font-normal text-[#6F6C90] py-[5px]'>Please select an option</p>

                                        <div className="">
                                            <div className="lg:flex gap-[30px] items-center mt-[10px]">
                                                <div className="w-[248px] rounded-[16px] border-[2px] hover:cursor-pointer hover:border-[#00AF65] py-[35px] flex justify-center items-center gap-[10px]">
                                                    <label className="flex gap-[20px] items-center">
                                                        <input type="radio" name="option" value="1" class="form-radio h-4 w-4 checked:bg-[#00AF65]" />

                                                        <span className='font-bold text-[18px] font-sans text-[#131216]'>Location based</span>
                                                    </label>
                                                </div>
                                                <div className="w-[248px] mt-[10px] lg:mt-0 rounded-[16px] border-[2px] hover:cursor-pointer hover:border-[#00AF65] py-[35px] flex justify-center items-center gap-[10px]">
                                                    <label className="flex gap-[20px] items-center">
                                                        <input type="radio" name="option" value="1" class="form-radio h-4 w-4 checked:bg-[#00AF65]" />
                                                        <span className='font-bold text-[18px] font-sans text-[#131216]'>Shift based</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <p className='font-sans font-bold text-[24px] mt-[20px]'>Shift Allowance ?</p>
                                            <p className='text-[18px] font-sans font-normal text-[#6F6C90] py-[5px]'>Please select an option</p>

                                            <div className="lg:flex gap-[30px] items-center mt-[10px]">
                                                <div className="w-[248px] rounded-[16px] border-[2px] hover:cursor-pointer hover:border-[#00AF65] py-[35px] flex justify-center items-center gap-[10px]">
                                                    <label className="flex gap-[20px] items-center">
                                                        <input type="radio" name="option-two" value="2" class="form-radio h-4 w-4 checked:bg-[#00AF65]" />
                                                        <span className='font-bold text-[18px] font-sans text-[#131216]'>Enable</span>
                                                    </label>
                                                </div>
                                                <div className="w-[248px] mt-[10px] lg:mt-0 rounded-[16px] border-[2px] hover:cursor-pointer hover:border-[#00AF65] py-[35px] flex justify-center items-center gap-[10px]">
                                                    <label className="flex gap-[20px] items-center">
                                                        <input type="radio" name="option-two" value="2" class="form-radio h-4 w-4 checked:bg-[#00AF65]" />
                                                        <span className='font-bold text-[18px] font-sans text-[#131216]'>Disable</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {currentStep === 4 && (
                                    <div className="">
                                        <div className="flex items-center gap-5 py-[5px] mt-[-40px] w-[321px] hover:cursor-pointer">
                                            <div className="lg:ml-[23px]">
                                                <img src={ellipsepic} alt="Profile" />
                                            </div>
                                            <div>
                                                <p className='font-dm-sans text-[14px]'>John Carter</p>
                                            </div>
                                        </div>
                                        <div className="relative">

                                            <img src={circle} className='lg:ml-[41%] ml-[80px]' alt="" />

                                        </div>
                                        <p className='font-sans font-bold text-[24px] text-center pt-[10px]'>Shift Added</p>
                                        <p className='text-[18px] font-sans font-normal text-[#6F6C90] py-[5px] text-center'>You can now check the shift in your dashboard ! Happy <br />working !</p>

                                        <Link to='/admin/dashboard'>
                                            <Button className='text-[18px] mt-[30px] ml-[30px] lg:ml-[230px] text-center font-bold font-sans bg-[#00AF65] text-white text-white px-[40px] py-[25px] rounded-[25px] border-1 border-[#00AF65]' onClick={handlePrevStep}>
                                                Goback to Dashboard
                                            </Button>
                                        </Link>


                                    </div>
                                )}


                            </ModalBody>
                            <ModalFooter className='flex justify-between items-center'>
                                {currentStep > 0 && (
                                    <Button className='text-[14px] lg:text-[18px] w-[16%] font-normal bg-white font-sans hover:bg-[#00AF65] hover:text-white lg:mr-[50px] text-[#00AF65] px-6 py-2 rounded-[20px] border-1 border-[#00AF65]' onClick={handlePrevStep}>
                                        Previous
                                    </Button>
                                )}

                                <p className='text-[#E5434F] font-sans text-[14px] text-center lg:text-[18px] w-[33%]'>Click anywhere to close</p>
                                <Button className='text-[14px] lg:text-[18px] w-[16%] font-normal font-sans bg-[#00AF65] text-white px-6 py-2 rounded-[20px]' onClick={handleNextStep}>
                                    {currentStep < steps.length - 1 ? 'Next step' : 'Finish'}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Addshift;
