import React from 'react';
import loginSideImage from '@/assets/Images/AuthenticationScreen/LoginSideImage.webp'
import styles from '@/assets/CSS/authenticationScreens/pages/login.module.css'
import emailIcon from '@/assets/Images/AuthenticationScreen/Icons/EmailIcon.webp'
import passwordIcon from '@/assets/Images/AuthenticationScreen/Icons/PasswordIcon.webp'
import { Link } from 'react-router-dom';
import AuthenticationScreenLayout from '@/layouts/AuthenticationScreenLayout';

const Login = () => {
    return (
        <>
            <AuthenticationScreenLayout>
                <children>
                    <div className="w-[100%]">
                        <div className={`${styles.maincontainer} w-[100%] md:w-[70%] mx-auto flex justify-between flex-col  md:flex-row items-center gap-5 bg-black md:bg-white`}>
                            <div className="w-[100%]  md:w-[45%] flex justify-center items-center">
                                <img src={loginSideImage} className={`${styles.loginSideImage} hidden md:block`} alt="Login Side Image" />
                                {/* Mobile View SignIn */}
                                <h1 className={`${styles.MobileViewMainHeading} block  md:hidden text-white`}>Sign In</h1>
                                {/* Mobile View SignIn */}
                            </div>
                            <div className={`${styles.MobileViewloginForm} w-[100%] md:w-[50%] bg-white`}>
                                <h1 className={`${styles.login_main_signin_Heading} hidden md:block`}>Sign In</h1>
                                <form action="" className='w-[90%] md:w-[100%] m-auto mt-24 mb-36  md:mt-0 md:mb-0'>


                                    <div className={styles.main_inp_component}>
                                        <label htmlFor="email" className={styles.login_inp_label}>Email</label><br />
                                        <div className={styles.email_inp_field}>
                                            <input type="email" /><br />
                                            <img src={emailIcon} className={styles.emailIcon} alt="" />
                                        </div>
                                    </div>


                                    <div className={styles.main_inp_component}>
                                        <label htmlFor="password" className={styles.login_inp_label}>Password</label><br />
                                        <div className={styles.password_inp_field}>
                                            <input type="password" /><br />
                                            <img src={passwordIcon} className={styles.passwordIcon} alt="" />
                                        </div>
                                    </div>


                                    <div className="hidden md:flex md:justify-between md:items-center md:mt-3">
                                        <div className={styles.rememberMain}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Remember Me</label>
                                        </div>
                                        <div className={styles.forgotLink}>
                                            <h1><Link to="/forget-password">Forgot Your Password?</Link></h1>
                                        </div>
                                    </div>

                                    <button type='submit' className={styles.signin_button}>Sign in</button>
                                    <div className={`${styles.MobileViewForgotLink} block md:hidden`}>
                                        <Link to="/forget-password" className='text-right'>Forget Password?</Link>
                                    </div>
                                </form>



                            </div>
                        </div>
                    </div>
                </children>
            </AuthenticationScreenLayout>
        </>
    );
}

export default Login;