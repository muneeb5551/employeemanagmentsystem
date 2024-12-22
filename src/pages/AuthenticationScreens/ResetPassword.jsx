import React from 'react';
import loginSideImage from '@/assets/Images/AuthenticationScreen/LoginSideImage.webp'
import styles from '@/assets/CSS/authenticationScreens/pages/login.module.css'
import emailIcon from '@/assets/Images/AuthenticationScreen/Icons/EmailIcon.webp'
import passwordIcon from '@/assets/Images/AuthenticationScreen/Icons/PasswordIcon.webp'
import AuthenticationScreenLayout from '@/layouts/AuthenticationScreenLayout';

export default function ResetPassword() {
    return (
        <>
            <AuthenticationScreenLayout>
                <children>
                    <div className="w-[100%]">
                        <div className={`${styles.maincontainer} w-[100%] md:w-[70%] mx-auto flex justify-between flex-col md:flex-row items-center gap-5 bg-black md:bg-white`}>
                            <div className="w-[100%]  md:w-[45%] flex justify-center items-center">
                                <img src={loginSideImage} className={`${styles.loginSideImage} hidden md:block`} alt="Login Side Image" />
                                {/* Mobile View SignIn */}
                                <h1 className={`${styles.MobileViewMainHeading} block md:hidden text-white`}>Reset Password</h1>
                                {/* Mobile View SignIn */}
                            </div>
                            <div className={`${styles.MobileViewloginForm} w-[100%] md:w-[50%] bg-white`}>
                                <h1 className={`${styles.login_main_signin_Heading} hidden md:block`}>Reset Password</h1>
                                <h1 className={styles.login_main_text_Heading}>Enter your email and new password</h1>

                                <form action="" className='w-[90%] md:w-[100%] m-auto mt-24 mb-36  md:mt-0 md:mb-0'>


                                    <div className={styles.main_inp_component}>
                                        <label htmlFor="email" className={styles.login_inp_label}>Email</label><br />
                                        <div className={styles.email_inp_field}>
                                            <input type="email" /><br />
                                            <img src={emailIcon} className={styles.emailIcon} alt="" />
                                        </div>
                                    </div>


                                    <div className={styles.main_inp_component}>
                                        <label htmlFor="password" className={styles.login_inp_label}>New Password</label><br />
                                        <div className={styles.password_inp_field}>
                                            <input type="password" /><br />
                                            <img src={passwordIcon} className={styles.passwordIcon} alt="" />
                                        </div>
                                    </div>


                                    <div className={styles.main_inp_component}>
                                        <label htmlFor="password" className={styles.login_inp_label}>Confirm Password</label><br />
                                        <div className={styles.password_inp_field}>
                                            <input type="password" /><br />
                                            <img src={passwordIcon} className={styles.passwordIcon} alt="" />
                                        </div>
                                    </div>




                                    <button type='submit' className={styles.signin_button}>Confirm</button>
                                </form>



                            </div>
                        </div>
                    </div>
                </children>
            </AuthenticationScreenLayout>
        </>
    )
}
