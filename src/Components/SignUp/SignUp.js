import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(email);
    }
    const handlePassword = event => {

        setPassword(event.target.value);
        console.log(password);
    }
    const handleConfirmPassword = event => {

        setConfirmPassword(event.target.value);
        console.log(confirmPassword);
    }
    if (user) {
        navigate('/');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('** two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('** Password must be more then 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);


    }

    return (
        <div>
            <div className="form-container">
                <div>
                    <h1 className='form-title'>Sign up</h1>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="Email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="Password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="Password">Confirm password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirmPassword" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error} </p>

                        <input className='form-submit' type="submit" value="Submit" />
                    </form>


                    <p>Already have an account? <Link className='form-link' to="/login ">Login please</Link> </p>
                </div>
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

        </div >
    );
};

export default SignUp;