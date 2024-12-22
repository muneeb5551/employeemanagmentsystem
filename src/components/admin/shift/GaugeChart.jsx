import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import dropicon from '../../../assets/Images/Icons/arrow-down.webp';
import DropdownComponent from './DropdownComponent';

const data = [
    {
        name: 'Completed',
        value: 90,
        fill: '#469635'
    },
    {
        name: 'Delayed',
        value: 30,
        fill: '#e5ae21'
    },
    {
        name: 'Ongoing',
        value: 20,
        fill: '#e65f26'
    }
];

const GaugeChart = () => {
    const completedPercentage = 100;

    return (
        <div className='text-center p-5 dark:text-white dark:bg-[#151719] bg-[#F5F6F7] rounded-lg shadow-md w-full max-w-md mx-auto'>
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-xl font-bold font-dm-sans'>Projects Workload</h1>
             <DropdownComponent title = "All" / >
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"   
                    outerRadius="80%"  
                    barSize={15}
                    startAngle={180}
                    endAngle={0}
                    data={data}
                >
                    <RadialBar
                        minAngle={15}
                        clockWise={true}
                        dataKey="value"
                        cornerRadius={10}
                        background
                        data={data.map((d, i) => ({ ...d, radius: [80 + i * 20, 100 + i * 20] }))}
                    />
                    <Tooltip />
                    <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
                    <text
                        x="50%"
                        y="40%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-3xl font-bold dark:fill-white fill-black"
                    >
                        {completedPercentage}%
                    </text>
                    <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-lg fill-gray-500"
                    >
                        Completed
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-lg">
                <div className="inline-block mr-5">
                    <b>95</b> Total projects
                </div>
                <div className="inline-block mr-5 text-green-500">
                    <b>26</b> Completed
                </div>
                <div className="inline-block mr-5 text-yellow-500">
                    <b>35</b> Delayed
                </div>
                <div className="inline-block text-orange-500">
                    <b>35</b> Ongoing
                </div>
            </div>
        </div>
    );
};

export default GaugeChart;
