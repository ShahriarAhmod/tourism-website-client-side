import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                setError(error.message);
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
        <div className="text-center mt-5 pt-5" style={{backgroundColor:'rgb(237, 238, 247)'}}>
            <h1 className="mb-4 pt-5 fw-bold" style={{ color: 'rgb(33, 36, 64)' }}>Please Login</h1>
            <form onSubmit={handleLoginWithEmailAndPassword}>
                <input style={{ border: '1px solid', borderRadius: '10px', padding: '5px 30px' }} type="email" onBlur={handleGetEmail} placeholder="Email" />
                <br /><br />
                <input style={{ border: '1px solid', borderRadius: '10px', padding: '5px 30px' }} type="password" onBlur={handleGetPassword} placeholder="Password" />
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="login" />
                <p className="text-danger">{error}</p>
            </form>
            <p>or</p>
            <h4 className="fw-bold" style={{ color: 'rgb(92, 94, 196)' }}>Sign in with Google</h4>

            <button className="btn btn-success mt-3 mb-3"  onClick={handleGoogleLogin}>Google Sign In</button>
            <p> New User ? <Link to="/signup">Please Signup</Link ></p>

        </div>
    );
};

export default Login;