import React, { useState } from "react";

const TimeRangePicker = () => {
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("09:00");

  return (
    <div className="flex items-center justify-between space-x-4">
      {/* From Time */}
      <div className="flex flex-col">
        <label htmlFor="from-time" className="mb-1 text-[18px] font-dm-sans font-semibold">
          From
        </label>
        <div className="flex items-center border py-[14px]  px-2 w-[321px]">
          <input
            type="time"
            id="from-time"
            className="outline-none w-full"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m9 0A9 9 0 1112 3a9 9 0 019 9z"
            />
          </svg>
        </div>
      </div>

      <span className="text-lg font-bold text-gray-400">·</span>

      {/* To Time */}
      <div className="flex flex-col">
        <label htmlFor="to-time" className="mb-1 text-[18px] font-dm-sans font-semibold">
          To
        </label>
        <div className="flex items-center border py-[14px] w-[321px] p-2">
          <input
            type="time"
            id="to-time"
            className="outline-none w-full"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m9 0A9 9 0 1112 3a9 9 0 019 9z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TimeRangePicker;
