import React from 'react';
import { MessageSquare, User2, ListChecks, LucideLayoutDashboard, Briefcase } from "lucide-react";
import Navigation from '@/layouts/Navigation';
import Sidebar from '@/layouts/Sidebar';
import { SidebarItem } from '@/layouts/Sidebar';

const EmployeeLayout = ({ children, title }) => {
    return (
        <>
            <div className="flex">
                <div className="w-[0%] md:w-[15%] hidden md:block">
                    <Sidebar>
                        <SidebarItem icon={<LucideLayoutDashboard size={30} />} route="/employee/dashboard" text="Dashboard" />
                        <SidebarItem icon={<Briefcase size={30} />} route="/employee/timetable" text="Timetable" />
                        <SidebarItem icon={<ListChecks size={30} />} route="/employee/attendance" text="Attendance" />
                        <SidebarItem icon={<MessageSquare size={30} />} route="/admin/messenger" text="Messanger" />
                    </Sidebar>
                </div>
                <div className="w-[100%] md:w-[85%]">
                    <Navigation title={title} />
                    {children}
                </div>
            </div>
        </>
    );
}

export default EmployeeLayout;
