import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

function DateField() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="flex space-x-4">
            {/* Start Date */}
            <div className="flex flex-col">
                <div className="relative">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className=" h-16 pl-8 w-[145px] py-2 bg-white border border-gray-300 shadow-md focus:outline-none"
                        placeholderText=""
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                    </div>
                </div>
            </div>

            {/* End Date */}
            <div className="flex flex-col">
                <div className="relative">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="h-16 pl-8 w-[145px] pr-4 py-2 bg-white border border-gray-300 shadow-md focus:outline-none"
                        placeholderText=""
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DateField;
