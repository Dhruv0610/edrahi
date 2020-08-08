import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Modal from '@material-ui/core/Modal';
import './homework.css'
import MicModal from '../MicModal/micmodal';
import {makeStyles} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ShareModal from '../ShareModal/sharemodal';

const theme = createMuiTheme({
    overrides: {
        MuiBackdrop: {
        root: {
            opacity: 0.3
        },
      },
    },
});

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
}));

const Homework = (props) => {
    const classes=useStyles();

    const [openMic,setOpenMic] = useState(false);

    const [openShare,setOpenShare]= useState(false);

    function handleShareOpen(){
        setOpenShare(true);
    }

    function handleShareClose(){
        setOpenShare(false);
    }


    function handleMicOpen(){
        setOpenMic(true);
    }

    function handleMicClose(){
        setOpenMic(false);
    }

    const micBody=(
        <MicModal openMic={openMic} handleMicClose={handleMicClose}/>
    );

    const shareBody=(
        <ShareModal openShare={openShare} handleShareClose={handleShareClose} subject={props.subject} class={props.class} dueDate={props.dueDate} />
    );

    return ( 
        <React.Fragment>
            <ThemeProvider theme={theme}>
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
                            BackdropComponent={Backdrop}
                        >
                            {micBody}
                        </Modal>
                        <br />
                        <button onClick={handleShareOpen}>Share</button>
                        <Modal 
                            open={openShare}
                            onClose={handleShareClose}
                            aria-labelledby="Share-Modal"
                            aria-describedby="Modal to share the homework"
                            className={classes.modal}
                            BackdropComponent={Backdrop}
                        >
                            {shareBody}
                        </Modal>
                    </div>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}
 
export default Homework;