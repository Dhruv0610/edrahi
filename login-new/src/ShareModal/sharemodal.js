import React, { useState,useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import google from '../images/google.png';
import whatsapp from '../images/whatsapp.png';
import edrahi from '../images/edrahi.png';
import {WhatsappShareButton} from 'react-share';
import './sharemodal.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: '#f1f1f1',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90vw',
        borderRadius: 10,
        padding: 10
    },
    header: {
        display: 'flex'
    },
    shareIcon: {
        color: '#ecfcf9',
        width: 60,
        height: 60,
        position: "relative",
        padding: 5,
        paddingTop: 15,
        top: -25,
        backgroundColor: '#1cc373',
        borderRadius: '50%'
    },
    exitButton: {
        position: 'relative',
        top: -60,
        right: '-47%',
    },
    modalHeading: {
        fontSize: 24,
        fontWeight: "bold"
    },
    modalText: {
        // color: 'gray',
        marginTop: 10,
        marginBottom: 20,
        width: '75%'
    },
    shareIcons:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginBottom:10
    },
    google:{
        fontWeight: 'bold',
        flexBasis: 1,
        position: 'relative',
        top: -8
    },
    // edrahi:{
    //     fontWeight: 'bold',
    //     flexBasis: 1
    // },
    whatsapp:{
        fontWeight: 'bold',
        flexBasis: 1
    }
}));

const ShareModal = (props) => {
    const classes = useStyles();

    function handleClick(){
        props.handleShareClose();
        console.log('Exit button clicked');
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);


    // function handleGoogleShare(){
    //     gapi.sharetoclassroom.render('content',{"url":"https://www.google.com"});
    // }


    return (
        <div className={classes.paper}>
            <div className={classes.shareIcon}>
                <ShareIcon style={{fontSize: 30}}/>
            </div>
            <div className={classes.exitButton} onClick={handleClick}>
                <HighlightOffIcon />
            </div>
            <div className={classes.modalHeading}>
                Share Homework
            </div>
            <div className={classes.modalText}>
                You are sharing this {props.subject} homework with class {props.class} and the due date is {props.dueDate}
            </div>
            <div className={classes.shareIcons}>
                <div id='content' className={classes.google}>
                    <div className='g-sharetoclassroom' data-body="Math homework for class VIII-F. The due date is 13-08-2020" data-url={String(Window.location)}>
                        
                    </div>
                    {/* <img id="content" src={google} alt='google-icon'></img> */}
                    <div className="google-text">
                        Google Classroom
                    </div>
                </div>
                <div className={classes.whatsapp}>
                    <WhatsappShareButton url={String(Window.location)} title='Math homework for class VIII-F. The due date is 13-08-2020'>
                        <img src={whatsapp} alt='whatsapp-icon'></img>
                    </WhatsappShareButton>
                    Whatsapp
                </div>
                {/* <div className={classes.edrahi}>
                    <img src={edrahi} alt='edrahi-icon'></img>
                    EdRAHI
                </div> */}
            </div>
        </div>
    );
}
 
export default ShareModal;