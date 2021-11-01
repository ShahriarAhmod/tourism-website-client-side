import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'rgb(63, 64, 69)'}}>
            <div className="d-flex align-items-center justify-content-evenly p-5">
                <div className="">
                    <div className="text-light">
                        <h1 className="mb-4" style={{ color: 'rgb(242, 197, 252)' }}>Tour BD</h1>
                        <h6>23/4 Gulshan <br />Dhaka,Bangladesh</h6>
                    </div>
                </div>
                <div className="">
                    <div className="text-light">
                        <h3 className="mb-3">Contact us</h3>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +8801715654213</h6>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +8801818997786</h6>
                        <h6><i class="fas fa-briefcase pe-1"></i> +55655426710</h6>
                        <h6><i class="fas fa-envelope pe-1"></i> tourbd23@gmail.com</h6>
                    </div>

                </div>
                <div className="">
                    <div className="text-light">
                        <h4 className="mb-3">Follow Us</h4>
                        <i class="fab fa-facebook-square fs-2"></i>
                        <i class="fab fa-instagram-square fs-2 ps-2"></i>
                        <i class="fab fa-linkedin fs-2 ps-2"></i>
                        <i class="fab fa-google-plus-square fs-2 ps-2"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
