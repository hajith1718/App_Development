import React from 'react';
import "../assets/css/Terms.css"
import SideBar from '../Components/SideBar';
import Navd from '../Components/NavBarDashboard';
import Footer from './Footer';
function Terms() {
    return (
        <div>
            <Navd />
            <div className='Main'>
                <div className='main1'><SideBar /></div>

            
                <div className="terms-and-conditions-container">
                    <div className="close-button">
                    </div>
                    <h1>Terms and Conditions</h1>
                    <ul>
                        (T&C) that users must agree to before using the platform. These T&C serve to protect both the users and the platform provider,
                        ensuring that everyone understands their rights, responsibilities, and the rules governing the use of the service. Here are some
                        common elements you might find in the terms and conditions of an online investment application:
                    </ul>
                    <h2> Eligibility</h2>
                    <ul>
                        <li> T&C will specify who can use the platform. Usually, users must be of a certain age and meet other legal requirements.</li>
                    </ul>
                    <h2>Account Creation</h2>
                    <ul>
                        <li>nformation about how users can create an account, including the requirement for accurate and up-to-date information. </li>
                        <li> This may also include instructions on creating a secure password.</li>
                    </ul>
                    <h2> User Responsibilities</h2>
                    <ul>
                        <li>User Responsibilities</li>
                        <li>Outlines the responsibilities and obligations of the user, such as keeping their login credentials confidential.</li>
                        <li> ensuring the accuracy of the information provided, and following the platform's rules and regulations.</li>
                    </ul>
                    <h2>Customer Responsibilities</h2>
                    <ul>
                        <li>You are responsible for providing accurate and complete information about the appliance and the issue to be addressed.</li>
                        <li>Ensure that the appliance is accessible for service and that you or an authorized representative is present during the service.</li>
                    </ul>
                    <h2>Platform's Responsibilities</h2>
                    <ul>
                        <li>The platform's responsibilities toward users, including providing accurate information, maintaining the security of user data,</li>
                        <li> and the availability of customer support..</li>
                    </ul>
                    <h2>Investment Risks</h2>
                    <ul>
                        <li> Disclosures regarding the inherent risks associated with investing. This may include warnings that past performance</li>
                        <li>   is not indicative of future results.</li>
                    </ul>
                    <h2>Privacy Policy</h2>
                    <ul>
                        <li>Information about how user data is collected, stored, and used. It should also mention </li>
                        <li>any third-party sharing of data and how users can opt-out.hi</li>
                    </ul>
                </div>
            </div>
            <Footer/></div>
    );
}

export default Terms;