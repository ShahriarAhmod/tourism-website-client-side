import React from 'react';
import owner from '../../images/owner.png';
import coOwner from '../../images/co-owner.png';
import manager from '../../images/manager.png';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact my-5 py-5">

            </div>
            <div className="container mb-5 mt-4 contact-detail ps-5">

                <div className="p-1 m-4">
                    <div>
                        <img className="call p-2" src={coOwner} alt="" style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className="text-start">
                        <h3>Co-Owner</h3>
                        <h3>Niyaz Rahman</h3>
                        <p>+9964852923</p>
                    </div>

                </div>

                <div className=" p-1 m-4">
                    <div>
                        <img className="email p-2" src={owner} alt="" style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className="text-start">
                        <h3>Owner</h3>
                        <h3>Rakib ahmod</h3>
                        <p>+9977665554</p>

                    </div>

                </div>
                <div className="p-1 m-4">
                    <div>
                        <img className="location p-2" src={manager} alt="" style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className="text-start">
                        <h3>manager</h3>
                        <h3>Rasel Islam</h3>
                        <p>+99965872109</p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Contact;