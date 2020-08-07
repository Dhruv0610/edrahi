import React, { useState,useEffect } from 'react';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import './otp.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReplayIcon from '@material-ui/icons/Replay';
import OtpInput from 'react-otp-input';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Otp = (props) => {

    const [otp,setOtp] = useState('');
    const [progress,setProgress] = useState(0);

    // const otpTimer=<CircularProgress variant="static" value={progress} />;

    useEffect(() => {

        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function handleChange(e){
        setOtp(e);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(otp);
        props.history.push('/homework');
    }

    function handleClick(){
        setProgress(0);
    }

    const otpTimer= progress>=100 ? <div className='resend-icon' onClick={handleClick}>
                                        <ReplayIcon color='primary'></ReplayIcon>
                                        <p>Resend OTP</p>
                                    </div>
                                    :
                                    <div className='progress-bar'>
                                        <CircularProgress variant="static" value={progress} />
                                        <p>{Math.round((100-progress)/10)}s</p>
                                    </div>;

    const inputStyle={
        width: 40,
        height: 45,
        marginRight: 15
    }

    return ( 
        <div className='main-section'>
            <div className="image-container">
                <img src={logo} className='logo' alt='logo'></img>
            </div>
            <div className='otp-form'>
                    <div className='otp-heading'>
                        <Link to='/'><button className="back-button"><ArrowBackIosIcon></ArrowBackIosIcon><span>Back</span></button></Link>
                        <h2>
                            Welcome Back
                        </h2>
                    </div>        
                <form onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            inputStyle={inputStyle}
                            autoFocus={true}
                        />
                        {/* <input id="codeBox1" type="number" maxLength="1"></input>
                        <input id="codeBox2" type="number" maxLength="1"></input>
                        <input id="codeBox3" type="number" maxLength="1"></input>
                        <input id="codeBox4" type="number" maxLength="1"></input> */}
                        {otpTimer}
                    </div>
                    <p className='otp-helper-text'>Enter the OTP you received on 9810715286</p>
                    <button type='submit' className='submit-button'>Verify</button>
                </form>               
            </div>
        </div>
    );
}
 
export default Otp;