import React, { useState } from 'react';

const TimeframeSelector = () => {
  const [selectedOption, setSelectedOption] = useState('daily');

  return (
    <div className="flex items-center lg:space-x-4">
      <label className="flex items-center gap-[-3px] cursor-pointer">
        <span className={`mr-2 w-2 h-2 rounded-full ${selectedOption === 'daily' ? 'bg-green-500' : 'bg-transparent border border-gray-400'}`}></span>
        <input
          type="radio"
          name="timeframe"
          value="daily"
          checked={selectedOption === 'daily'}
          onChange={() => setSelectedOption('daily')}
          className="hidden"
        />
        <span className={`text-${selectedOption === 'daily' ? 'green-500' : 'gray-500'} font-dm-sans text-[12px] lg:text-[16px]`}>Daily</span>
      </label>
      
      <label className="flex items-center cursor-pointer">
        <span className={`mr-2 w-2 h-2 rounded-full ${selectedOption === 'weekly' ? 'bg-blue-500' : 'bg-transparent border border-gray-400'}`}></span>
        <input
          type="radio"
          name="timeframe"
          value="weekly"
          checked={selectedOption === 'weekly'}
          onChange={() => setSelectedOption('weekly')}
          className="hidden"
        />
        <span className= {`text-${selectedOption === 'weekly' ? 'blue-500' : 'gray-500'} font-dm-sans text-[12px] lg:text-[16px] `}>Weekly</span>
      </label>

      <label className="flex items-center cursor-pointer">
        <span className={`mr-2 w-2 h-2 rounded-full ${selectedOption === 'monthly' ? 'bg-green-500' : 'bg-transparent border border-gray-400'}`}></span>
        <input
          type="radio"
          name="timeframe"
          value="monthly"
          checked={selectedOption === 'monthly'}
          onChange={() => setSelectedOption('monthly')}
          className="hidden"
        />
        <span className={`text-${selectedOption === 'monthly' ? 'blue-500' : 'gray-500'}font-dm-sans text-[12px] lg:text-[16px] `}>Monthly</span>
      </label>
    </div>
  );
};

export default TimeframeSelector;
