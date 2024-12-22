import React from 'react';
import { MessageSquare, User2, ListChecks, LucideLayoutDashboard, Briefcase } from "lucide-react";
import Navigation from '@/layouts/Navigation';
import Sidebar from '@/layouts/admin/Sidebar';
import { SidebarItem } from '@/layouts/admin/Sidebar';

const AdminLayout = ({ children, title }) => {
    return (
        <>
            <div className="flex">
                <div className="w-[100%] lg:w-[15%] z-10 hidden lg:block">
                    <Sidebar>
                        <SidebarItem icon={<LucideLayoutDashboard size={30} />} route="/admin/dashboard" text="Dashboard" />
                        <SidebarItem icon={<Briefcase size={30} />} route="/admin/shifts" text="Shifts" />
                        <SidebarItem icon={<ListChecks size={30} />} route="/admin/attendance" text="Attendance" />
                        <SidebarItem icon={<User2 size={30} />} route="/admin/users" text="Users" />
                        <SidebarItem icon={<MessageSquare size={30} />} route="/admin/messenger" text="Messanger" />
                    </Sidebar>
                </div>
                <div className="w-[100%] md:w-[85%]">
                    <Navigation title={title}/>
                    {children}
                </div>
            </div>
        </>
    );
}

export default AdminLayout;
