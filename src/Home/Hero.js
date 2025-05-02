import React from "react";
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className="hero-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fingertips_block">
                            <h1>All-in-One Solution for Smarter Society Management</h1>
                            <p>Transform your society's management with innovative solutions designed for modern living. Our platform simplifies event planning, parcel tracking, complaint resolution, and visitor management, ensuring efficient and hassle-free operations for society administrators.</p>
                            <h2>Transform your society into a smarter and well-managed community</h2>
                            <p>Manage your society's communication, operation, and resident engagement with ease</p>
                            <div className="d-flex gap-2">
                                <Link to="#">Request a Demo</Link>
                                <Link to="#">Download App</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="app_screen">
                            <div className="center_img">
                                <img src="assets/images/app_mobile_banner.png" alt="mobile" />
                                <img className="left-mobile" src="assets/images/lift-maint.png" alt="mobile" />
                                <img className="right-top-img" src="assets/images/holi-festival.png" alt="mobile" />
                                <img className="right-bottom-img" src="assets/images/sell-property.png" alt="mobile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;