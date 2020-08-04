import React, { useState,useEffect } from 'react';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import './otp.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReplayIcon from '@material-ui/icons/Replay';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Otp = (props) => {

    // const [otp,setOtp] = useState('');
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

    // function handleChange(e){
    //     setOtp=e.target.value;
    // }

    function handleSubmit(e){
        e.preventDefault();
        console.log('Hi');
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


    return ( 
        <div className='main-section'>
            <div className="image-container">
                <img src={logo} className='logo' alt='logo'></img>
            </div>
            <div className='otp-form'>
                    <div className='otp-heading'>
                        <Link to='/'><button className="back-button"><ArrowBackIosIcon></ArrowBackIosIcon></button></Link>
                        <h2>
                            Welcome Back
                        </h2>
                    </div>        
                <form onSubmit={handleSubmit}>
                    <input id="codeBox1" type="number" maxlength="1"></input>
                    <input id="codeBox2" type="number" maxlength="1"></input>
                    <input id="codeBox3" type="number" maxlength="1"></input>
                    <input id="codeBox4" type="number" maxlength="1"></input>
                    {/* <div className='progress-bar'>
                        <CircularProgress variant="static" value={progress} />
                        <p>{Math.round((100-progress)/10)}s</p>
                    </div> */}
                    {/* <div className='resend-icon'>
                        <ReplayIcon color='primary'></ReplayIcon>
                        <p>Resend OTP</p>
                    </div> */}
                    {otpTimer}
                </form>
                <p>Enter the OTP you received on 9810715286</p>
                <button type='submit' className='submit-button'>Verify</button>
            </div>
        </div>
    );
}
 
export default Otp;