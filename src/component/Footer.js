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
                                <div className="col-md-4">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link to="index.html">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="features.html">Features</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Benefits</Link>
                                        </li>
                                        <li>
                                            <Link to="about-us.html">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="faq.html">FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3>Features</h3>
                                    <ul>
                                        <li>
                                            <Link to="#">Parcel Management</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Visitor Management</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Event Management</Link>
                                        </li>
                                        <li>
                                            <Link to="#">SOS Alerts</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h3>Contact Us</h3>
                                    <div className="contact_info">
                                        <div>
                                            <Link to="tel:+917877089906">
                                                <LuPhone size={18} /> +91 7877089906
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="mailto:info@nexus.com">
                                                <MdMailOutline size={18} /> info@nexus.com
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="javascript:void();">
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