import React from 'react';
import footerStyles from '@/assets/CSS/authenticationScreens/components/footer.module.css';


const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className='w-[80%] mx-auto'>
        <h1 className={footerStyles.textContainer}>© Romage Software Corporation 2024.</h1>
      </div>
    </div>
  );
}

export default Footer;
