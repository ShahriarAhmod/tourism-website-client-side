import React from 'react';
import owner from '../../images/guide-1.png';
import agent from '../../images/guide4.png';
import manager from '../../images/guide-2.png';
import consultant from '../../images/guide-3.png';
import './Details.css';

const Details = () => {
    return (
        <div>

            {/* Clients Review Section */}
            <div className="p-5" style={{ backgroundColor: 'rgb(188, 209, 190)' }}>
                <h2 className="text-center fw-bold fst-italic" style={{ color: 'rgb(91, 91, 135)' }}>Reviews From Our Lovely Clients</h2>

                <div className="d-flex justify-content-evenly mt-5">
                    <div className=" p-1 border rounded-3 m-3 bg-light">
                        <div className="p-3 text-center">
                            <div className="fw-bold text-secondary">Rating:
                                <i className="fas fa-star ms-1 text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></div>
                            <p>“ I love the way you guys are always very helpful and accommodating. Your service is excellent and I am more than happy to use your organization for all future holidays. ”</p>
                            <p className="fw-bold text-success">~ Meera Ahmed</p>
                            <p>2 Days ago</p>
                        </div>
                    </div>

                    <div className=" p-1 border rounded-3 m-3 bg-light">
                        <div className="p-3 text-center">
                            <div className="fw-bold text-secondary">Rating:
                                <i className="fas fa-star ms-1 text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></div>
                            <p>“ We were very happy with our holiday booking and our accommodation. We would book with Tour BD again and definitely recommend their services to others. ”</p>
                            <p className="fw-bold text-success">~ Lisa Rahman</p>
                            <p>6 Days ago</p>
                        </div>
                    </div>

                    <div className=" p-1 border rounded-3 m-3 bg-light">
                        <div className="p-3 text-center">
                            <div className="fw-bold text-secondary">Rating:
                                <i className="fas fa-star ms-1 text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></div>
                            <p>“ Very friendly and easy communication. Prompt response to email questions. Kept me well informed about the trip.Will definitely book my future trips with Tour BD again. ”</p>
                            <p className="fw-bold text-success">~ Sajay Roy</p>
                            <p>1 week ago</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* Information Section */}
            <div className="p-3" style={{ backgroundColor: 'rgb(242, 247, 255)' }}>
                <h2 className="text-center fw-bold mt-5  fst-italic" style={{ color: 'rgb(61, 56, 122)' }}>We are always at your Service</h2>
                <p className="text-center">We try to provide quality travel trip for you which is sure to make your tour memorable for ever! <br /> You can contact any of us us Anytime if you need any help and support from us .<br /> We are always available for you to give you the best travel experience ever </p>
                <div className="d-flex justify-content-evenly mb-5 mt-5">
                    <div className=" p-1 border rounded-3 bg-light">
                        <div>
                            <img className="owner p-2 mx-auto" src={owner} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <div className="p-5 text-center ">
                            <h3>Nish Ahmed</h3>
                            <h5 className="text-warning">Owner</h5>
                            <h6>+8817427529572</h6>
                        </div>

                    </div>
                    <div className="p-1  border rounded-3 bg-light">
                        <div>
                            <img className="agent  p-2" src={agent} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <div className="p-5 text-center">
                            <h3>Sama Iffat</h3>
                            <h5 className="text-warning">Agent</h5>
                            <h6>+8819078573656</h6>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 bg-light">
                        <div>
                            <img className="manager p-2" src={manager} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <div className="p-5 text-center">
                            <h3>Akash Roy</h3>
                            <h5 className="text-warning">Manager</h5>
                            <h6>+8817387556735</h6>
                        </div>

                    </div>

                    <div className="p-1 border rounded-3 bg-light">
                        <div>
                            <img className="consultant p-2" src={consultant} alt="" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <div className="p-5 text-center">
                            <h3>Rakib Hasan</h3>
                            <h5 className="text-warning">Consultant</h5>
                            <h6>+8815763967347</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;