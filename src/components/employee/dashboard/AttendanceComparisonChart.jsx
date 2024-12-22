import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AttendanceComparisonChart = () => {
    return (
        <div className="">
            <Line
                data={{
                    labels: [
                        '01 Aug', '02 Aug', '03 Aug', '04 Aug', '07 Aug',
                        '08 Aug', '09 Aug', '10 Aug', '11 Aug', '14 Aug', '15 Aug', '16 Aug'
                    ],
                    datasets: [
                        {
                            label: '',
                            data: [65, 70, 75, 91, 85, 80, 91, 80, 85, 75, 70, 85],
                            fill: true,
                            backgroundColor: 'rgba(33, 150, 243, 0.2)',
                            borderColor: '#499B17',
                            pointBackgroundColor: '#499B17',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#2196F3',
                            tension: 0.4,
                        }
                    ],
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    if ([0, 20, 40, 60, 80, 100].includes(value)) {
                                      return value + '%';
                                    }
                                }
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Disable the legend
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.raw}%`;
                                },
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default AttendanceComparisonChart;
