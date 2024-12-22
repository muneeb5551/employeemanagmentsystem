import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import CalendarIcon from '@/assets/Images/Icons/calendar.png';

const RequestLeave = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className='flex justify-center md:justify-end items-center mt-5'>
                <Button onPress={onOpen} color="primary" className='text-[13px] font-extrabold bg-[#00AF65] text-white px-5 py-3 rounded-lg '>Request for Leave</Button>
            </div>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[30px] font-semibold">Request for leave</ModalHeader>
                            <ModalBody>
                                <div className='flex flex-col md:flex-row justify-between'>
                                    <div className='w-[100%] md:w-[30%]'>
                                        <label htmlFor="Type" className='text-[18px] font-medium text-[#344054]'>Type</label>
                                    </div>
                                    <div className='w-[100%] md:w-[70%] relative'>
                                        <select name="" id="" className='w-[100%] border-2 border-[#E3E3E3] rounded-lg focus:outline-none p-3 appearance-none'>
                                            <option value="">Sick</option>
                                        </select>
                                        <img src={CalendarIcon} alt="" className='absolute top-[50%] translate-y-[-50%] right-[13px]' />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between mt-8'>
                                    <div className='w-[100%] md:w-[30%]'>
                                        <label htmlFor="Start Date" className='text-[18px] font-medium text-[#344054]'>Start Date</label>
                                    </div>
                                    <div className='w-[100%] md:w-[70%] relative'>
                                        <input type="date" name="" id="" className='w-[100%] border-2 border-[#E3E3E3] rounded-lg focus:outline-none p-3 appearance-none' />
                                        <img src={CalendarIcon} alt="" className='absolute top-[50%] translate-y-[-50%] right-[13px]' />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between mt-8'>
                                    <div className='w-[100%] md:w-[30%]'>
                                        <label htmlFor="End date" className='text-[18px] font-medium text-[#344054]'>End date</label>
                                    </div>
                                    <div className='w-[100%] md:w-[70%] relative'>
                                        <input type="date" name="" id="" className='w-[100%] border-2 border-[#E3E3E3] rounded-lg focus:outline-none p-3 appearance-none' />
                                        <img src={CalendarIcon} alt="" className='absolute top-[50%] translate-y-[-50%] right-[13px]' />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between mt-8'>
                                    <div className='w-[100%] md:w-[30%]'>
                                        <label htmlFor="Reason " className='text-[18px] font-medium text-[#344054]'>Reason </label>
                                    </div>
                                    <div className='w-[100%] md:w-[70%]'>
                                        <textarea name="" id="" placeholder='Enter your reason' className='w-[100%] border-2 border-[#E3E3E3] rounded-lg focus:outline-none p-3 appearance-none text-[18px] text-[#727272]'></textarea>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className='text-[22px] font-normal bg-[#00AF65] text-white px-6 py-5 rounded-lg mb-5 ' onPress={onClose}>
                                    Done
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default RequestLeave;
