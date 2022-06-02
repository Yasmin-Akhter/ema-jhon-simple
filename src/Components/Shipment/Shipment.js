import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleName = event => {
        setName(event.target.value);
        console.log(name);
    }
    const handleAddress = event => {

        setAddress(event.target.value);

    }
    const handlePhone = event => {

        setPhone(event.target.value);

    }

    const handleShipment = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="form-container">
                <div>
                    <h1 className='form-title'>Shipment</h1>
                    <form onSubmit={handleShipment}>
                        <div className='input-group'>
                            <label htmlFor="Name">Name</label>
                            <input onBlur={handleName} type="text" name="name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="Email">Email</label>
                            <input value={user.email} type="email" name="email" id="" readOnly />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddress} type="text" name="address" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone">Phone Number</label>
                            <input onBlur={handlePhone} type="text" name="phone number" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error} </p>

                        <input className='form-submit' type="submit" value="Submit" />
                    </form>



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

export default Shipment;