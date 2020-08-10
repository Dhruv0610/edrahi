import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Fade from '@material-ui/core/Fade';
// import ReactSwipeEvents from 'react-swipe-events';
import {ReactMic} from 'react-mic';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: "absolute",
      bottom: 60
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    micIcon: {
        backgroundColor: theme.palette.background.paper,
        padding: 15,
        paddingBottom: 10,
        borderRadius: '50%',
        boxShadow: theme.shadows[3]
    },
    paperTextBottom: {
        textAlign: 'center',
        height: 30,
        marginTop: 30,
        width: '80vw',
        color: 'white'
    },
    paperTextTop: {
        textAlign: 'center',
        height: 30,
        marginBottom: 10,
        width: '40vw',
        color: 'white'
    },
    recorder: {
        width: 0,
        visibility: "hidden"
    }
  }));


const MicModal = (props) => {

    const [touch,setTouch]=useState(false);
    const [time,setTime]=useState(0);
    const [start,setStart]=useState(0);
    const [firstTouch,setFirstTouch] = useState(false);
    const ms=require('pretty-ms');
    let timer = 0;

    const classes=useStyles();

    function handleTouchStart(){
        setTouch(true);
        setFirstTouch(true);
        setStart(Date.now());
        timer = setInterval(()=>setTime((Date.now())),1);
    }

    function handleTouchEnd(){
        setTouch(false);
        setTime(0);
        clearInterval(timer);
    }

    function handleSubmit(){
        props.handleMicClose();
        console.log('Audio Confirmed');
    }

    function handleCancel(){
        props.handleMicClose();
        console.log('Audio Cancelled');
    }

    const helperTextTop = touch ?  
                                <div> 
                                    <div className={classes.paperTextTop}>
                                        {ms(time-start,{compact: true, colonNotation: true})}
                                    </div>
                                </div>
                                : firstTouch ?
                                    <div className={classes.paperTextTop}></div>
                                    :
                                    <div className={classes.paperTextTop}></div>

                               
    const micIconView = (!touch)&&firstTouch ? 
                                    <div className={classes.iconContainer}>
                                        <div className={classes.paperTextTop}  onClick={handleCancel}>
                                            <HighlightOffIcon style={{fontSize: 40}} color='secondary'/>
                                            <p>Cancel</p>
                                        </div>  
                                        <div className={classes.paperTextTop}  onClick={handleSubmit}>
                                            <CheckCircleOutlineIcon style={{fontSize: 40, color: green[500]}}/>
                                            <p>Submit</p>
                                        </div>
                                    </div>
                                    :
                                    <div className={classes.micIcon} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                                        <MicNoneIcon style={{fontSize: 40}} color='primary'/>
                                        <ReactMic 
                                            record={touch}
                                            className={classes.recorder}
                                            onStop={onStop}
                                        />
                                    </div>

    const helperTextBottom = firstTouch ? 
                        <div className={classes.paperTextBottom}>
                            
                        </div>
                        :
                        <React.Fragment>
                            <div className={classes.paperTextBottom}>
                                Press and hold this button to record a voice note
                            </div>
                        </React.Fragment>
                        ;

    function onStop(r){
        console.log(r);
    }

    return ( 
        <Fade in={props.openMic}>
            <div className={classes.paper}>
                {helperTextTop}
                {micIconView}
                {helperTextBottom}
            </div>
        </Fade>
    );
}
 
export default MicModal;