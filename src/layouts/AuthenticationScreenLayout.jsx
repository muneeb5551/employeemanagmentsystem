import React from 'react';
import Navbar from '@/components/admin/authticationScreens/Navbar';
import Footer from '@/components/admin/authticationScreens/Footer';

const AuthenticationScreenLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default AuthenticationScreenLayout;
