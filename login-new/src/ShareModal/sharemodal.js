import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import google from '../images/google.png';
import whatsapp from '../images/whatsapp.png';
import edrahi from '../images/edrahi.png';

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
    },
    edrahi:{
        fontWeight: 'bold',
        flexBasis: 1
    },
    whatsapp:{
        fontWeight: 'bold',
        flexBasis: 1
    }
}));

const ShareModal = (props) => {
    const classes = useStyles();

    function handleClick(){
        console.log('Exit button clicked');
    }

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
                <div className={classes.google}>
                    <img src={google} alt='google-icon'></img>
                    Google Classroom
                </div>
                <div className={classes.whatsapp}>
                    <img src={whatsapp} alt='whatsapp-icon'></img>
                    Whatsapp
                </div>
                <div className={classes.edrahi}>
                    <img src={edrahi} alt='edrahi-icon'></img>
                    EdRAHI
                </div>
            </div>
        </div>
    );
}
 
export default ShareModal;