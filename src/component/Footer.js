import React from "react";
import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-md-4 mb-lg-0  ">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src="/assets/images/footer-logo.png" alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-3">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/feature">Features</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="#">Benefits</Link>
                                        </li> */}
                                        <li>
                                            <Link to="/about-us">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3>Features</h3>
                                    <ul>
                                        <li>
                                            <Link to="/feature/parcel-management">Parcel Management</Link>
                                        </li>
                                        <li>
                                            <Link to="/feature/visitor-management">Visitor Management</Link>
                                        </li>
                                        <li>
                                            <Link to="/feature/event-management">Event Management</Link>
                                        </li>
                                        <li>
                                            <Link to="/feature/sos-alerts">SOS Alerts</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <h3>Contact Us</h3>
                                    <div className="contact_info">
                                        <div>
                                            <Link to="tel:+918899999987">
                                                <LuPhone size={18} /> +91 8899999987
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="mailto:manageyoursociety@gmail.com" className="">
                                            <MdMailOutline size={18}/> manageyoursociety@gmail.com
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#">
                                                <HiOutlineLocationMarker size={18} /> Jaipur, Rajasthan
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="social-links">
                                        <Link to="#">
                                            <FaInstagram size={20} />
                                        </Link>
                                        <Link to="#">
                                            <FiFacebook size={20} />
                                        </Link>
                                        <Link to="#">
                                            <SlSocialLinkedin size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>@copyright {currentYear} </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;