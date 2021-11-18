import React from 'react';
import './Tourist.css';

const Tourist = () => {
    return (
       <div>
            <div className="help">
        </div>
        <div className="my-5">
        <h1 className="fw-bold mb-3 text-center" style={{color: 'rgb(94, 116, 171)'}}>Join Our Help Club</h1>
        </div>
        <div className=" p-3 m-5" style={{backgroundColor: 'rgb(169, 199, 181)'}}>
            <div>
                <h3 className="mb-3 fw-bold">What kind of service do we provide here?</h3>
                <p className="fs-5 mb-5">
                    Our HelpClub is specially made for the people who face problem during travelling with us. In the help club anyone can get help related to travelling and extra care and support is given to the child. If you have any problem and query related to travelling you can discuss with us in the help club.
                </p>
            </div>
        </div>
        <div className=" p-3 m-5" style={{backgroundColor: 'rgb(176, 185, 209)'}}>
            <div>
                <h3 className="mb-3 fw-bold">How To Become Our Club Member ?</h3>
                <p className="fs-5 mb-5">
                    You can become our help club member by providing your required information of you and your documents with us. You dont have to pay any extra fees for that. It is completely free. We genuinely care about you and promise to give better care and services.
                </p>
            </div>
        </div>
        <div className="text-center mb-5">
            <button className="join-btn">Join Now</button>
        </div>
       </div>
    );
};

export default Tourist;