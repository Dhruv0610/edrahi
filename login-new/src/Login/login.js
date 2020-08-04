import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './login.css';
import logo from '../images/logo.jpg';

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
          

const Login = (props) => {
    const [number,setNumber] = useState('');

    function handleChange(e){
        setNumber(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(props.validateUser(number));
        props.history.push('/otp');
        e.target.reset();
    }

    return ( 
        <ThemeProvider theme={theme}>
            <div className='main-section'>
                <div className="image-container">
                    <img src={logo} className='logo' alt='logo'></img>
                    {/* <div className='image-border'></div> */}
                </div>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <h2>
                            Welcome Back
                        </h2>
                        <TextField
                            className='form-input'
                            id="outlined-helperText"
                            label="Enter your Mobile Number"
                            helperText='By clicking on "Send OTP" button, I agree to receive OTP for Mobile Number verification.'
                            variant="outlined"
                            onChange={handleChange}
                        /><br/>
                        <button type='submit'>Send OTP</button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
     );
}
 
export default Login;