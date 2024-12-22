import React, { useState } from 'react';
import EmployeeLayout from '@/layouts/employee/EmployeeLayout';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Timetable = (props) => {
    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, 'days').toDate(),
            title: 'The basics of buying'
        }
    ]);

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#00AF65',
            borderRadius: '30px',
            color: 'white',
            border: '0px',
            display: 'block',
            padding: '5px 20px',
        };
        return {
            style: style
        };
    };

    return (
        <>
            <EmployeeLayout title ="Timetable" >
                <div className='w-[95%] mx-auto mt-10'>
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={events}
                        style={{ height: '100vh' }}
                        eventPropGetter={eventStyleGetter}
                        toolbar={{
                            views: ['month', 'week'], // Show only Month and Week views
                            label: () => null, // Hide the label
                        }}
                    />
                </div>
            </EmployeeLayout>
        </>
    );
}

export default Timetable;
