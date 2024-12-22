import { useState } from "react";
import ellipsepic from '../../../assets/Images/profile/ellipse79.webp';

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        name: 'John Carter',
        image: ellipsepic,
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectUser = (name, image) => {
        setSelectedUser({ name, image });
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative inline-block text-left">
            {/* User info and dropdown icon */}
            <div
                className="flex items-center cursor-pointer gap-5 py-[12px] border border-[#EFF0F6] w-[321px]"
                onClick={toggleDropdown}
            >
                <img
                    src={selectedUser.image}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full ml-[23px]"
                />
                <span className="ml-2 font-dm-sans">{selectedUser.name}</span>
                <svg
                    className="w-4 h-4 ml-[90px] text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {/* Dropdown options */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-[321px] bg-white border border-gray-200 rounded-md shadow-lg">
                    <a
                        href="#"
                        onClick={() => handleSelectUser('John Carter', ellipsepic)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <div className="flex">
                            <img
                                src={ellipsepic}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full ml-[8px]"
                            />
                            <span className="ml-[24px] font-dm-sans">John Carter</span>
                        </div>
                    </a>
                    <a
                        href="#"
                        onClick={() => handleSelectUser('Oedipus Rex', ellipsepic)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <div className="flex">
                            <img
                                src={ellipsepic}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full ml-[8px]"
                            />
                            <span className="ml-[24px] font-dm-sans">Oedipus Rex</span>
                        </div>
                    </a>
                    <a
                        href="#"
                        onClick={() => handleSelectUser('Dr Fastus', ellipsepic)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        <div className="flex">
                            <img
                                src={ellipsepic}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full ml-[8px]"
                            />
                            <span className="ml-[24px] font-dm-sans">Dr Fastus</span>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;
