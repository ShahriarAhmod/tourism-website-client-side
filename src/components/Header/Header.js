import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import "./Header.css"
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'rgb(33, 97, 105)' }}>

                <div class="container-fluid">
                    <img className="ms-4 logo" src={Logo} alt="" style={{ width: '60px' }} />
                    <span className="title ms-1">Tour BD</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link to="/home" className="text-light text-decoration-none">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" className="text-light text-decoration-none ps-4">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="text-light text-decoration-none ps-4">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className="text-light text-decoration-none ps-4">Contact</Link>
                            </li>
                          
                             <li class="nav-item">
                                <Link to="/signup" className="text-light text-decoration-none ps-4">Sign Up</Link>
                            </li>
                            <Link to="/login" className="text-light text-decoration-none ps-4 pe-5">Login</Link>
                            <span className="text-light text-decoration-none"> </span>
                            {user?.displayName && <li class="nav-item">
                                <Link to="/myBookings" className="text-light text-decoration-none ps-4">My Bookings</Link>
                            </li>}
                            <span className="text-light text-decoration-none"> </span>
                            {user?.displayName && <li class="nav-item">
                                <Link to="/manageBookings" className="text-light text-decoration-none ps-3">Manage Bookings</Link>
                            </li>}
                            <span className="text-light text-decoration-none"> </span>
                            {user?.displayName && <li class="nav-item">
                                <Link to="/addDestination" className="text-light text-decoration-none ps-3 pe-4">Add Place</Link>
                            </li>}

                            <span className="text-light text-decoration-none pe-3">{user.displayName} </span>
                            {user?.displayName && <button className="btn-logout" onClick={logOut}>Log out</button>} 
                            </ul>  
                    </div>

                </div>
            </nav >
        </div >
    );
};

export default Header;

