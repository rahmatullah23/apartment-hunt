import React from 'react';
import './Footer.css'
import fb from '../../images/fb.png';
import ins from '../../images/ins.png';
import li from '../../images/li.png';
import yt from '../../images/yt.png';

const Footer = () => {
    return (
        <footer id="footer" className="pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5><b>Address</b></h5>
                        <p>H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                        <p>Phone: 018XXXXXXXX</p>
                        <p>Email: test@gmail.com</p>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <h5><b>Company</b></h5>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Site Map</li>
                            <li>Support Center</li>
                            <li>Terms Conditions</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <h5><b>Quick Links</b></h5>
                        <ul className="list-unstyled">
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Our Blog</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5><b>About Us</b></h5>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7</p>
                        <div className="links mt-4">
                            <img width="30px" className="mr-3" src={fb} alt="facebook"/>
                            <img width="30px" className="mr-3" src={ins} alt="facebook"/>
                            <img width="30px" className="mr-3" src={li} alt="facebook"/>
                            <img width="40px" className="mr-3" src={yt} alt="facebook"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;