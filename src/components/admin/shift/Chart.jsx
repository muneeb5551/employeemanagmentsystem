import React, { useState } from 'react';
import '../../../assets/CSS/sub-pages/chart.css';
import DropdownComponent from './DropdownComponent'; // Import the dropdown component


const data = [
  { month: 'Jan', value: 3 },
  { month: 'Feb', value: 4 },
  { month: 'Mar', value: 5, highlight: true },
  { month: 'Apr', value: 2 },
  { month: 'May', value: 4, highlight: true },
  { month: 'June', value: 1 },
  { month: 'July', value: 6, highlight: true },
  { month: 'Aug', value: 3 },
  { month: 'Sep', value: 5 },
  { month: 'Oct', value: 2 },
  { month: 'Nov', value: 4 },
  { month: 'Dec', value: 1 },
];

// Define the ranges for the dropdown options
const ranges = {
  'January-June': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  'July-December': ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
};

const Chart = () => {
  const [selectedRange, setSelectedRange] = useState('January-June'); // Default range

  // Filter the data based on the selected range
  const filteredData = data.filter(item => ranges[selectedRange].includes(item.month));

  return (
    <div className="chart-container dark:bg-[#151719] p-[20px]">
      <div className="header">
        <h1 className='text-[16px] lg:text-[20px] font-dm-sans flex chart-heading dark:text-white'>Projects Workload</h1>
        {/* Pass the setSelectedRange function to the dropdown */}
        <DropdownComponent 
          title="January-June" 
          options={Object.keys(ranges)} 
          onSelect={setSelectedRange} 
        />
      </div>
      
      <div className="chart">
        {filteredData.map((item, index) => (
          <div key={index} className="chart-item">
            <div className="circle-stack">
              {[...Array(6).keys()].map(i => (
                <div 
                  key={i} 
                  className={`circle dark:bg-white ${i < item.value ? 'filled' : ''} ${item.highlight && i === item.value - 1 ? 'highlight' : ''}`}
                >
                  {i === item.value - 1 && <span>{item.value.toString().padStart(2, '0')}</span>}
                </div>
              ))}
            </div>
            <span className="month-label dark:text-white">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
