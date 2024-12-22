import React from 'react';

const Box = (props) => {
    const backgroundColor = props.bgColor;
    return (
        <>
            <div className='w-[100%] bg-[#F8F8F8] px-5 py-8 rounded-lg shadow-md dark:bg-[#C8E1F91A]'>
                <div className='rounded-[50%] w-[46px] h-[46px] flex justify-center items-center' style={{ backgroundColor: props.bgColor }}>
                    <img src={props.image} alt="" />
                </div>
                <h1 className='text-[14px] font-extrabold text-[#797979] mt-2'>{props.leaveType}</h1>
                <h1 className='text-[28px] font-extrabold mt-2'>{props.noOfLeaves}</h1>
                <div className='flex justify-start items-center gap-1 mt-2'>
                    <img src={props.arrow} alt="" />
                    <h2 className='text-[10px] font-extrabold'>{props.leaveDetail}</h2>
                </div>
            </div>
        </>
    );
}

export default Box;
