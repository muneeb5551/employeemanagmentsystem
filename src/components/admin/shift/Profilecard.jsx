import { useState } from 'react';
import ellipsepic from '../../../assets/Images/profile/ellipse79.webp';
import dropicon from '../../../assets/Images/Icons/arrow-down.webp'
import waleed from '../../../assets/Images/profile/waleed.webp'
import umair from '../../../assets/Images/profile/umair.webp'

export default function ProfileCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({
    name: 'Hani Shah',
    username: '@j_hollyoway',
    image: umair,
  });

  const profiles = [
    {
      name: 'Hani Shah',
      username: '@j_hollyoway',
      image: umair,
    },
    {
      name: 'Izzah Fayyaz',
      username: '@j_hollyoway',
      image: ellipsepic,
    },
    {
      name: 'Umair Mani',
      username: '@j_hollyoway',
      image: waleed,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div onClick={toggleDropdown} className="relative flex mb-[20px] items-center ml-[10px] lg:ml-[34px] gap-5 py-[8px] border-1 border-black shadow-md rounded-[36px] w-[280px] lg:w-[321px] hover:cursor-pointer dark:border-white">
      <div className="lg:ml-[23px] ml-[20px]">
        <img src={selectedProfile.image} alt={selectedProfile.name} />
      </div>

      <div>
        <p className='font-dm-sans text-[14px]'>{selectedProfile.name}</p>
        <p className='font-dm-sans text-[10px]'>{selectedProfile.username}</p>
      </div>

      <div className="lg:ml-[100px] ml-[70px]">
        <img src={dropicon} alt="" />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute dark:bg-black top-full mt-2 right-0 bg-white border w-[280px] lg:w-[320px] border-gray-300 rounded-lg shadow-lg z-20">
          {profiles.map((profile, index) => (
            <div key={index} className='flex items-center gap-[20px] hover:bg-gray-200 pb-[10px]' onClick={() => handleProfileSelect(profile)}>
              <div className="lg:ml-[6px] ml-[20px]">
                <img src={profile.image} alt={profile.name} />
              </div>

              <div>
                <p className='font-dm-sans text-[14px]'>{profile.name}</p>
                <p className='font-dm-sans text-[10px]'>{profile.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
