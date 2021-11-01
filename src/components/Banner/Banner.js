import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <div className="text-center">
            <h1 className="fw-bold mt-5 pt-5" style={{fontSize: '50px'}}>Welcome to <br/><span style={{color: 'rgb(21, 95, 207)'}}> Tour BD </span></h1>
            <p className="fs-4 text-light">Warmly welcome you to the Tour BD <br/>Visit us to see the whole Bangladesh </p>
            <button className="btn btn-success" >Take a tour</button>
            </div>   
        </div>
    );
};

export default Banner;