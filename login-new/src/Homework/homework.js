import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Modal from '@material-ui/core/Modal';
import './homework.css'
import MicModal from '../MicModal/micmodal';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
}));

const Homework = (props) => {
    const classes=useStyles();

    const [openMic,setOpenMic] = useState(false);

    const [openShare,setOpenShare]= useState(false);

    function handleMicOpen(){
        setOpenMic(true);
    }

    function handleMicClose(){
        setOpenMic(false);
    }

    function handleSwipeDown(){
        setOpenMic(false);
    }

    const micBody=(
        <MicModal openMic={openMic} handleSwipeDown={handleSwipeDown} />
    );

    return ( 
        <React.Fragment>
            <Navbar subject={props.subject} />
            <div className='main-homework-section'>
                <div className='mic-icon'>
                    <button onClick={handleMicOpen}>Open Microphone</button>
                    <Modal 
                        open={openMic}
                        onClose={handleMicClose}
                        aria-labelledby="Mic-Modal"
                        aria-describedby="Modal to display the microphone for recording"
                        className={classes.modal}
                    >
                        {micBody}
                    </Modal>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Homework;