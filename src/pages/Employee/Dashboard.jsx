import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-2xl text-red-600 mb-5'>Employee Dashboard</h1>
            <Link to="/" className='p-3 bg-slate-600 text-white block hover:bg-slate-500 hover:text-white transition duration-300'>Back To Main</Link>
        </div>
    );
}

export default Dashboard;
