import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleEmail = event => {
        setEmail(event.target.value);

    }
    const handlePassword = event => {

        setPassword(event.target.value);

    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    console.log(user);
    return (
        <div>
            <div className="form-container">
                <div>
                    <h1 className='form-title'>Login</h1>
                    <form onSubmit={handleSignInUser}>
                        <div className='input-group'>
                            <label htmlFor="Email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="Password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>

                        <p style={{ textAlign: 'center', width: 415, padding: 5, color: 'red' }}>{error?.message}</p>

                        <input className='form-submit' type="submit" value="Submit" />
                    </form>
                    <p>New to ema john? <Link className='form-link' to="/Signup">Create an account</Link> </p>
                    <div className='underline'>
                        <div >
                            <hr className="line"></hr>
                        </div>
                        <p className='orText'>Or</p>
                        <div >
                            <hr className="line"></hr>
                        </div>
                    </div>
                    <div className="input-group">
                        <input className='googleSubmitBtn' type="submit" value="Continue with Google" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;