// import React from 'react';

// const employees = [
//   { name: 'Izzah Fayyaz', username: '@ashley', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Hani Shah', username: '@j_holloway', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Umair', username: '@stephen', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Waleed', username: '@richard_walt', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Arshaq', username: '@michael', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Melissa Bradley', username: '@melissa_bradley', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Victoria Griffin', username: '@victoria.g', avatar: 'https://via.placeholder.com/40', team: 'Marketing Team' },
//   { name: 'Derek Larson', username: '@larson', avatar: 'https://via.placeholder.com/40', team: 'Department Team' }
// ];

// const schedules = [
//   { day: 4, timeRange: '08:00 - 16:00', label: 'Full day', type: 'full-day', employee: 'Izzah Fayyaz', color: 'bg-blue-200' },
//   { day: 4, timeRange: '08:00 - 16:00', label: 'Vacation', type: 'vacation', employee: 'Waleed', color: 'bg-red-200' },
//   { day: 4, timeRange: '08:00 - 16:00', label: 'Remote', type: 'remote', employee: 'Melissa Bradley', color: 'bg-yellow-200' },
//   // Add more schedules as per the image example
// ];

// const Scheduler = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-12 gap-4">
//         {/* Employee List */}
//         <div className="col-span-3">
//           <h2 className="font-semibold text-lg mb-2">Employee Name</h2>
//           <div>
//             {employees.map((employee, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <input type="checkbox" className="mr-2" />
//                 <img src={employee.avatar} alt={employee.name} className="rounded-full w-10 h-10 mr-2" />
//                 <div>
//                   <p className="font-medium">{employee.name}</p>
//                   <p className="text-sm text-gray-500">{employee.username}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Schedule Grid */}
//         <div className="col-span-9">
//           <div className="grid grid-cols-7 gap-2">
//             {/* Days of the Week */}
//             {Array.from({ length: 7 }).map((_, i) => (
//               <div key={i} className="text-center font-semibold">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</div>
//             ))}
//           </div>

//           <div className="mt-2">
//             {employees.map((employee, index) => (
//               <div key={index} className="grid grid-cols-7 gap-2 mb-4">
//                 {Array.from({ length: 7 }).map((_, dayIndex) => (
//                   <div key={dayIndex} className="h-24 border border-gray-200 relative">
//                     {schedules
//                       .filter(schedule => schedule.day === dayIndex + 1 && schedule.employee === employee.name)
//                       .map((schedule, scheduleIndex) => (
//                         <div key={scheduleIndex} className={`absolute inset-0 p-2 ${schedule.color}`}>
//                           <span className="block text-xs">{schedule.label}</span>
//                           <span className="block text-xs">{schedule.timeRange}</span>
//                         </div>
//                       ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scheduler;
