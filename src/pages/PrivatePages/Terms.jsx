import React from 'react';
import styles from '@/assets/CSS/privatePages/privatePages.module.css'
import AuthenticationScreenLayout from '@/layouts/AuthenticationScreenLayout';

const Terms = () => {
    return (
        <>
            <AuthenticationScreenLayout>
                <children>
                    <div className="w-[80%] mx-auto pt-10">
                        <h1 className={styles.main_heading}>TERMS & CONDITIONS</h1>
                    </div>
                    <hr />
                    <div className="w-[80%] mx-auto pt-4 pb-4">
                        <h1 className={styles.sub_heading}>General Terms</h1>
                        <ol class="list-decimal">
                            <li className='mb-5'><strong>Pricing and Availability:</strong> Prices and availability of products are subject to change without notice. We reserve
                                the right to cancel orders arising from typographical errors or inaccuracies in pricing or availability. While we
                                strive for accuracy, we cannot guarantee that all information on our website is error-free.</li>
                            <li className='mb-5'><strong>Payment Policy:</strong> We accept major credit cards including Visa, MasterCard, American Express, and Discover
                                as well as payments through PayPal. Your card will be charged once your order is processed, usually within 24
                                hours. For security purposes, please ensure that the billing address and phone number provided match those
                                on file with your credit card company.</li>
                            <li className='mb-5'><strong>Return Policy:</strong> Due to health concerns, grocery products are not returnable. However, if there is an error with
                                your order, or if a product arrives damaged or not as described, please contact us within 30 days of receiving
                                your order. We will do our best to rectify the issue and ensure your satisfaction.</li>
                            <li className='mb-5'><strong>Product Information:</strong> Manufacturers may update packaging, information, and recipes without notice. While
                                we strive to provide accurate product information, we cannot be held responsible for changes made by
                                manufacturers. Rest assured, we sell the most recent version or packaging of the products listed on our
                                website.</li>
                            <li className='mb-5'><strong>Sales Tax Information:</strong> If required by law, sales tax will be added to orders delivered within the state of
                                Applicable sales tax rates will be charged accordingly.</li>
                            <h3 className='mb-5'><strong>Order Acceptance Policy</strong></h3>
                            <li className='mb-5'><strong>Order Confirmation:</strong> Receipt of an order confirmation does not imply acceptance of your order. We reserve
                                the right to accept or decline orders for any reason.</li>
                            <li className='mb-5'><strong>Order Fulfillment:</strong> We may fulfill orders with less than the quantity ordered, or cancel orders if necessary.
                                Special low prices are honored while supplies last, and we reserve the right to cancel orders if inventory runs
                                out at the special price.</li>
                            <li className='mb-5'><strong>Verification of Identity:</strong> We may require verification of identity or additional information before accepting
                                any order, particularly for payment security purposes.</li>
                        </ol>
                    </div>
                </children>
            </AuthenticationScreenLayout>
        </>
    );
}

export default Terms;