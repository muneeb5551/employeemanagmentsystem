import React from 'react';
import styles from '@/assets/CSS/privatePages/privatePages.module.css'
import AuthenticationScreenLayout from '@/layouts/AuthenticationScreenLayout';

const Support = () => {
  return (
    <>
      <AuthenticationScreenLayout>
        <children>
          <div className="w-[80%] mx-auto pt-10">
            <h1 className={styles.main_heading}>Contact Us</h1>
          </div>
          <hr />
          <div className="w-[80%] mx-auto pt-4 pb-4 mt-16">
            <form action="">
              <div className="supportinpOne w-[100%] flex flex-col md:flex-row justify-between  mb-7">
                <div className={styles.labelDiv}>
                  <label htmlFor="">Your Name*</label>
                </div>
                <div className={styles.inputDiv}>
                  <input type="text" />

                </div>
              </div>
              <div className="supportinpOne w-[100%] flex flex-col md:flex-row justify-between mb-7">
                <div className={styles.labelDiv}>
                  <label htmlFor="">Email Address*</label>
                </div>
                <div className={styles.inputDiv}>
                  <input type="text" />
                </div>
              </div>
              <div className="supportinpOne w-[100%] flex flex-col md:flex-row justify-between mb-7">
                <div className={styles.labelDiv}>
                  <label htmlFor="">Inquiry*</label>
                </div>
                <div className={styles.inputDiv}>
                  <textarea name="" rows="7" id=""></textarea>
                </div>
              </div>
              <div className='w-[100%] flex justify-end'>
                <button className='bg-black text-white p-2 w-[40%] md:w-[10%] text-xl'>Submit</button>
              </div>
            </form>

            <div className="location mt-10">
              <h1 className={styles.location_main_heading}>OUR LOCATION</h1>
              <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-20">
                <div className="location_item1">
                  <h2 className={styles.location_sub_headings}>
                    Romage.com  <br />
                    488 The Hideout <br />
                    Lake Ariel, PA 18436
                  </h2>
                </div>
                <div className="location_item2">
                  <h2 className={styles.location_sub_headings}>
                    Telephone <br />
                    (001) 820-0000‬
                  </h2>
                </div>
                <div className="location_item3">
                  <h2 className={styles.location_sub_headings}>
                    Email <br />
                    Romage99@gmail.com‬
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </children>
      </AuthenticationScreenLayout>
    </>
  );
}

export default Support;
