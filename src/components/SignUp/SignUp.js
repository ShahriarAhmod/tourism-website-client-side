import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import './SignUp.css'

const SignUp = () => {


    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");


    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                setError(error.message)
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };


    return (
        <div className="text-center mt-5 pt-5">
            <div className="mx-3 my-5 text-center w-50 mx-auto">
            <h2 className="fw-bold mb-4" style={{color: 'rgb(94, 123, 143)'}}>Please Sign up here</h2>
            <form onSubmit={handleRegistration}>
                <input  style={{ border: '1px solid', borderRadius: '10px', padding: '5px 30px' }}  type="text" onBlur={handleGetName} placeholder="Name" />
                <br /><br />
                <input  style={{ border: '1px solid', borderRadius: '10px', padding: '5px 30px' }}  type="email" onBlur={handleGetEmail} placeholder="Email" />
                <br /><br />
                <input  style={{ border: '1px solid', borderRadius: '10px', padding: '5px 30px' }}  type="password" onBlur={handleGetPassword} placeholder="Password" />
                <br /><br />
                <input className="btn btn-primary" type="Submit" placeholder="create" />
                <br /><br />
            </form>
            <div className="row">{error}</div>
            <p>or</p>
            <button  onClick={handleGoogleLogin} className="btn btn-success mb-3" >Google Sign In</button>
        
            <p> Already Signed Up ? <Link to="/login"> Please Login</Link ></p>
            </div>
        </div>
    );
};

export default SignUp;