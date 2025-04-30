import React from 'react'
import Faq from '../component/Faq'

export default function featuredetails() {
    return (
        <>
            <div className="features-sec features-detail">
                <div className="container">
                    <div className="features_info">
                        <h1>Efficient Member Management for Thriving Communities</h1>
                        <p>Streamline resident information and foster better communication within your society</p>
                        <span>Key Features</span>
                    </div>
                    <div className="feature-intro">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="/assets/images/members-intro.png" alt="img" />
                            </div>
                            <div className="col-md-6">
                                <h3>Introduction</h3>
                                <p>Managing member information is crucial for the smooth operation of any society. Our app offers a comprehensive Members Management feature designed to simplify the tracking of resident details, enhance communication, and promote a cohesive community environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-steps">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="steps-dec">
                                <div className="count">
                                    1
                                </div>
                                <h3>Comprehensive Member Profiles</h3>
                                <p>Maintain detailed records of each resident, including contact information, apartment details, and emergency contacts.</p>
                            </div>
                            <div className="steps-dec">
                                <div className="count">
                                    2
                                </div>
                                <h3>Move-In/Move-Out Tracking:</h3>
                                <p>Efficiently monitor resident move-ins and move-outs to keep records up-to-date.</p>
                            </div>
                            <div className="steps-dec">
                                <div className="count">
                                    3
                                </div>
                                <h3>Communication Hub</h3>
                                <p>Facilitate seamless communication between management and residents through in-app messaging and announcements</p>
                            </div>
                            <div className="steps-dec">
                                <div className="count">
                                    4
                                </div>
                                <h3>Membership Renewal Reminders</h3>
                                <p>Automated alerts for membership renewals and fee payments.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-md-center">
                            <div className="Benefits">
                                <h3>Benefits</h3>
                                <ul>
                                    <li>Quick access to resident information.</li>
                                    <li>Enhanced emergency preparedness.</li>
                                    <li>Personalized communication.</li>
                                </ul>
                            </div>
                            <div className="Benefits">
                                <h3>Benefits</h3>
                                <ul>
                                    <li>Accurate occupancy records.</li>
                                    <li>Streamlined onboarding/offboarding processes.</li>
                                    <li>Improved security management.</li>
                                </ul>
                            </div>
                            <div className="Benefits">
                                <h3>Benefits</h3>
                                <ul>
                                    <li>Instant dissemination of important notices.</li>
                                    <li>Encourages resident engagement.</li>
                                    <li>Reduces misunderstandings.</li>
                                </ul>
                            </div>
                            <div className="Benefits">
                                <h3>Benefits</h3>
                                <ul>
                                    <li>Timely reminders reduce late payments.</li>
                                    <li>Simplifies financial management.</li>
                                    <li>Enhances resident satisfaction.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    )
}
