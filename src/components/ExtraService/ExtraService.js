import React from 'react';
import men1 from '../../images/men2.png';
import women from '../../images/women.png';
import men2 from '../../images/men1.png';

import './ExtraService.css';
const ExtraService = () => {
    return (
        // Contact information on the homepage
        <div className="pt-5 mt-5" style={{ backgroundColor: 'rgb(227, 250, 227)' }}>
            <h3 className="text-center fw-bold mb-2 fst-italic" style={{ color: 'rgb(48, 66, 48)' }}>Speak to a Specialist to start planning your <br /> Dream Holiday Tour</h3>
            <div>
                <div className="d-flex justify-content-evenly mb-5 mt-5">
                    <div className=" p-3">
                        <div>
                            <img className="men1 p-2 mx-auto rounded-circle" src={men1} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <h4 className="text-center text-secondary ">Rocky</h4>
                    </div>
                    <div className="p-3">
                        <div>
                            <img className="women  p-2 rounded-circle" src={women} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <h4 className="text-center text-secondary">Meera</h4>
                    </div>
                    <div className="p-3">
                        <div>
                            <img className="men2 p-2 rounded-circle" src={men2} alt="" style={{ width: '200px', height: '200px' }} />
                            <h4 className="text-center text-secondary ">Sunny</h4>
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="p-5 text-center">
                            <p className="fs-5">Call one of our experts anytime when you need.<br /> They will try their best to serve you anytime.</p>
                            <h4 className="fw-bold" style={{ color: "rgb(21, 33, 21)" }}>014678786989</h4>
                            <button className="btn btn-success mt-3">Make An Enquiry</button>
                        </div>
                    </div>
                </div>


                {/* Our specifications on the homepage */}
                <div className="p-5" style={{ backgroundColor: 'rgb(188, 209, 190)' }}>
                    <h2 className="text-center fw-bold fst-italic" style={{ color: 'rgb(91, 91, 135)' }}>Why Choose Us ?</h2>
                    <div className="d-flex justify-content-evenly mb-5 mt-5 container">
                        <div className=" p-1 border rounded-3 m-3 bg-light">
                            <div className="p-3 text-center">
                                <h4 className="fw-bold" style={{ color: 'rgb(396, 140, 16)' }}>Best Guide</h4>
                                <p>We always try to provide the best guide for you.Our local guides are also available to guide you well during the trip.You can enjoy your vacation travelling with us. </p>
                            </div>
                        </div>
                        <div className=" p-1 border rounded-3 m-3 bg-light">
                            <div className="p-3 text-center">
                                <h4 className="fw-bold pb-2" style={{ color: 'rgb(37, 153, 118)' }}>Expert Knowledge</h4>
                                <p>Our specialist guides are very experience and they can help you in you travel well and can let you know all the details in depth about the place you choose to visit</p>
                            </div>
                        </div>
                        <div className=" p-1 border rounded-3 m-3 bg-light">
                            <div className="p-3 text-center">
                                <h4 className="fw-bold" style={{ color: 'rgb(242, 137, 85)' }}>Trusted Service</h4>
                                <p>We provide quality service to you and we are trusted. Our guides are very trusted so you can travel tension free with our guides and can be comfortable anywhere.</p>
                            </div>
                        </div>
                        <div className=" p-1 border rounded-3 m-3 bg-light">
                            <div className="p-3 text-center">
                                <h4 className="fw-bold" style={{ color: 'rgb(37, 153, 118)' }}>Best Facilities</h4>
                                <p>We try to provide the best facilities for you . We also have extra packages ready for you and we are working to make your trip more enjoyable and easier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraService;