import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyAttendanceChart = () => {
    const data = {
        labels: ['Sales', 'IT', 'Marketing', 'Legal', 'API'],
        datasets: [
            {
                label: 'Attendance',
                data: [45, 60, 86, 60, 55],
                backgroundColor: [
                    '#e6eef5',
                    '#e6eef5',
                    '#459330',
                    '#e6eef5',
                    '#e6eef5',
                ],
                borderColor: [
                    '#e6eef5',
                    '#e6eef5',
                    '#459330',
                    '#e6eef5',
                    '#e6eef5',
                ],
                borderWidth: 1,
                borderRadius: 15,
                barThickness: 45,
            },
        ],
    };

    const options = {
        indexAxis: 'x',
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        if ([0, 20, 40, 60, 80, 100].includes(value)) {
                            return value + '%';
                        }
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.raw}%`;
                    },
                },
            },
            datalabels: {
                display: true,
                align: 'end',
                anchor: 'end',
                formatter: function (value) {
                    return value === 86 ? `${value}%` : '';
                },
                color: '#ffffff',
                backgroundColor: '#2196F3',
                borderRadius: 3,
                padding: 6,
            },
        },
        maintainAspectRatio: false, // Disable the aspect ratio to customize the height
        responsive: true, // Make the chart responsive
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ height: '90%', minHeight: '360px' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default WeeklyAttendanceChart;
