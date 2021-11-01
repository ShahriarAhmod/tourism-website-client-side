import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Details from '../Details/Details';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Details /> 
        </div>
    );
};

export default Home;