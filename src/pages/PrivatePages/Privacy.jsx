import React from 'react';
import styles from '@/assets/CSS/privatePages/privatePages.module.css'
import AuthenticationScreenLayout from '@/layouts/AuthenticationScreenLayout';

const Privacy = () => {
  return (
    <>
      <AuthenticationScreenLayout>
        <children>
          <div className="w-[80%] mx-auto pt-10">
            <h1 className={styles.main_heading}>PRIVACY PLOCIY</h1>
          </div>
          <hr />
          <div className="w-[80%] mx-auto pt-4 pb-4">
            <h1 className={styles.privacy_sub_heading}>Romage Privacy Policy</h1>
            <p className={styles.privacy_paragraphs}>This Privacy Policy outlines how we collect, use, and share your personal information when you visit or make
              purchases on www.Romage.com (referred to as the "Site").</p>
            <h1 className={styles.privacy_sub_heading}>Personal Information We Collect</h1>
            <p className={styles.privacy_paragraphs}>
              When you visit the Site, we automatically gather certain information about your device, including details about
              your web browser, IP address, time zone, and cookies installed on your device. We also collect information
              about the specific web pages or products you view, as well as the websites or search terms that directed you
              to our Site. This automatically-collected data is referred to as "Device Information."</p>

            <h1 className={styles.privacy_sub_heading}>We collect Device Information using various technologies:</h1>
            <p className={styles.privacy_paragraphs}>
              <strong>Cookies:</strong> These are data files placed on your device that contain an anonymous unique identifier. <br />
              <strong>Log Files:</strong> These track actions on the Site, recording data such as your IP address, browser type, and date/time
              stamps. <br />
              <strong>Web Beacons, Tags, and Pixels:</strong> Electronic files used to record information about your browsing behavior on the
              Site. <br />
              Additionally, when you make a purchase or attempt to do so through the Site, we collect specific information
              from you, including your name, billing address, shipping address, email address, and phone number. This
              information, excluding credit card details (as they are entered on third-party payment processors like PayPal
              or Square), is termed as "Order Information."
            </p>

            <h1 className={styles.privacy_sub_heading}>How We Use Your Personal Information</h1>
            <p className={styles.privacy_paragraphs}>
              We utilize the Order Information we collect primarily to fulfill orders made through the Site, including processing
              payment details, arranging shipping, and issuing invoices or order confirmations. Furthermore, we use this
              Order Information to: <br /> <br />

              Communicate with you <br />
              Screen orders for potential risk or fraud</p>
          </div>
        </children>
      </AuthenticationScreenLayout>
    </>
  );
}

export default Privacy;
