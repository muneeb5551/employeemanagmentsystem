import React from 'react';
import Image from '../../assets/Images/CompanyLogo/RomageLogo.webp';
import styles from '../../assets/CSS/authenticationScreens/pages/login.module.css'

const Opening = () => {
    return (
        <>
            <div className="bg-black  min-h-screen flex justify-center items-center">
                <img src={Image} alt="" className={styles.openingScreenLogo} />
            </div>
        </>
    );
}

export default Opening;