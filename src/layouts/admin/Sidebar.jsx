import { Link, useLocation } from 'react-router-dom';
import RomageLogo from '@/assets/Images/CompanyLogo/RomageLogo.webp'
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className="md:h-full min-h-screen absolute md:relative lg:top-[0px] top-[48px] left-0 z-10">
                <nav className="h-full flex flex-col bg-black border-r border-[#C8E1F91A] shadow-sm">
                    <div className="p-5 pb-2 flex justify-between items-center mb-28">
                        <img src={expanded ? RomageLogo : RomageLogo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-10"}`} />
                        {/* <button onClick={() => setExpanded((curr) => !curr)} className="p-1 rounded-3xl absolute right-[-15px] top-[10px] shadow-lg  bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronLeft /> : <ChevronRight />}
                        </button> */}
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;


export function SidebarItem({ icon, text, alert, route }) {
    const location = useLocation();
    const isActive = location.pathname.startsWith(route);
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative w-[80%] m-auto flex items-center py-2 px-4 my-1 font-medium rounded-3xl cursor-pointer transition-colors group ${isActive ? "bg-white text-green-500" : "hover:bg-white hover:text-black text-white"}`}>
            {icon}
            <Link to={route} exact className={`overflow-hidden transition-all font-bold ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</Link>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}