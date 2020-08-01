import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './login.css';

const theme = createMuiTheme({
    overrides: {
        MuiFormHelperText: {
        contained: {
            marginLeft: 0,
            marginRight: 0
        },
      },
    },
});
          

const Login = () => {
    return ( 
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
     );
}
 
export default Login;