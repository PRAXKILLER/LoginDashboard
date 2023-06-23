import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './signin.css';

function Signin({ setLoggedin }) {
    return (
        <div className='loginContainer'>
            <div className='loginHeader'>
                <h1 className='loginHeader_h1'>
                    Board.
                </h1>
            </div>
            <div className='loginBar'>
                <h3 className='loginBar_h3'>Sign In</h3>
                <p className='loginBar_p'>Signin into your account</p>
                <div className='loginBar_googlebtn'>
                    <FcGoogle />
                    <span className='loginBar_googlebtn_span'>Signin With Google</span>
                </div>
                <div className='loginBar_block'>
                    <label className='loginBar_block_label'>Email Address</label>
                    <input className='loginBar_block_email' type='email' placeholder='Enter Email Address'></input>
                    <label className='loginBar_block_label'>Password</label>
                    <input className='loginBar_block_password' type='password' placeholder='Enter Password'></input>
                    <p className='loginBar_block_forgot'>Forgot Password?</p>
                    <button type='submit' className='loginBar_block_signin'>Sign In</button>
                </div>
                <p className='loginBar_register'>Don't have an account? <span className='loginBar_register_link'>Register Here</span></p>
            </div>
        </div>
    );
}

export default Signin;