import React from 'react';
import TextField from '@material-ui/core/TextField';
import './login.css';

const Login = () => {
    return ( 
        <div className='login-form'>
            <form>
                <h2>
                    Welcome Back
                </h2>
                <TextField
                    className='form-input'
                    id="outlined-helperText"
                    label="Enter your Mobile Number"
                    helperText='By clicking on "Send OTP" button, I agree to receive OTP for Mobile Number verification.'
                    variant="outlined"
                /><br/>
                <button>Send OTP</button>
            </form>
        </div>
     );
}
 
export default Login;