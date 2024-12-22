import React from 'react';
import { Box, Typography, Avatar, useTheme } from '@mui/material';

const ScheduleChart = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const scheduleData = [
    { day: 'Mon', task: 'UX Research', time: '8:00 - 2:00', color: '#8884d8', tasks: 4, hours: 8, avatar: '/profile.webp' },
    { day: 'Tues', task: 'Design Day 1', time: '9:00 - 12:00', color: '#83a6ed', tasks: 4, hours: 3, avatar: '/profile.webp' },
    { day: 'Wed', task: 'Design Day 1', time: '10:00 - 1:00', color: '#8dd1e1', tasks: 4, hours: 3, avatar: '/profile.webp' },
    { day: 'Thurs', task: 'Design Day 1', time: '9:00 - 12:00', color: '#82ca9d', tasks: 4, hours: 3, avatar: '/profile.webp' },
    { day: 'Fri', task: 'Design Day 1', time: '8:00 - 2:00', color: '#ffc658', tasks: 4, hours: 6, avatar: '/profile.webp' }
  ];

  return (
    <Box
      p={3}
      className={`rounded-lg shadow-lg dark:bg-[#151719] dark:text-white ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="pb-10 flex justify-between">
        <h1 className="font-bold font-dm-sans hidden lg:block text-[16px]">Schedulechart</h1>
        <h1 className="font-bold font-dm-sans lg:block hidden text-[16px]">Full Schedule</h1>
        <h1 className="font-bold font-dm-sans text-center lg:hidden text-[16px]">Schedule</h1>
      </div>
      <div className="pb-10 flex justify-between">
        {['08:00', '09:00', '10:00', '11:00', '12:00', '01:00', '02:00'].map((time, index) => (
          <h1 key={index} className="font-semibold text-[12px] lg:text-[16px]">{time}</h1>
        ))}
      </div>

      {scheduleData.map((item, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2} style={{ position: 'relative' }}>
          <Box flexShrink={0} width="50px">
            <Typography variant="h6">{item.day}</Typography>
          </Box>
          <Box
            style={{
              backgroundColor: item.color,
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '10px',
              flexGrow: 1,
              marginLeft: '20px',
              position: 'relative',
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar src={item.avatar} style={{ marginRight: '10px' }} />
              <Typography variant="subtitle1" color="inherit">{item.task}</Typography>
              <Box flexGrow={1} />
              <Box>
                <Typography variant="body2" color="inherit">Tasks: {item.tasks}</Typography>
                <Typography variant="body2" color="inherit">Hours: {item.hours}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ScheduleChart;
