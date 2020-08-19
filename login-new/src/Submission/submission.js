import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Modal from '@material-ui/core/Modal';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import DashboardModal from '@uppy/react/lib/DashboardModal';
import Uppy from '@uppy/core';
import './submission.css';
import Tus from '@uppy/tus';
import {makeStyles} from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import UploadModal from '../UploadModal/uploadmodal';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Webcam from '@uppy/webcam';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
}));

const Submission = (props) => {
    const classes=useStyles();

    const [openUploaded,setOpenUploaded] = useState(false);
    const [isSubmitted,setIsSubmitted] = useState(false);

    function handleUploadedOpen(){
        setOpenUploaded(true);
        setIsSubmitted(true);
    }

    function handleUploadedClose(){
        setOpenUploaded(false);
    }

    const uppy = React.useMemo(() => {
        return Uppy()
        .use(GoogleDrive, { companionUrl: 'https://companion.uppy.io' })
        .use(Webcam, {
            onBeforeSnapshot: () => Promise.resolve(),
            countdown: false,
            mirror: true,
            facingMode: 'environment',
            showRecordingLength: true,
            preferredVideoMimeType: null,
            preferredImageMimeType: null,
            
          })
        .use(Dropbox, { companionUrl: 'https://companion.uppy.io' })
        .use(Tus, { endpoint: 'https://master.tus.io/files/' })
    }, [])
    React.useEffect(() => {
        return () => uppy.close()
    }, [])



    uppy.on('complete', result => {
        handleUploadedOpen();
        console.log('successful files:', result.successful)
        console.log('failed files:', result.failed)
    })


    const buttonBody = isSubmitted ? 
                            <button>
                                <CheckCircleOutlineRoundedIcon className='camera-icon'></CheckCircleOutlineRoundedIcon>
                                <p>Homework Submitted</p>
                            </button>
                        :
                            <button>
                                <CameraAltOutlinedIcon className='camera-icon'></CameraAltOutlinedIcon>
                                <p>Submit Homework</p>
                            </button>
                        ;

    const uploadedBody = (
        <UploadModal subject={props.subject} />
    );

    return ( 
        <div className='submission-page'>
            <Navbar subject={props.subject} dueDate={props.dueDate}></Navbar>
            <div className='homework-section'>
                <div className='homework-heading'>
                    Factorization
                </div>
                <div className='homework-information'>
                    About the homework
                </div>
            </div>
            <div className='submit-container'>

                {buttonBody}

                <DashboardModal
                    uppy={uppy}
                    trigger='.submit-container'
                    target='body'
                    plugins={['Webcam','GoogleDrive','Dropbox']}
                    proudlyDisplayPoweredByUppy={false}
                    locale={{
                        strings: {
                            dropPaste: '%{browse}',
                            browse: 'Browse Files',
                            complete: 'Homework Submitted'
                        }
                    }}
                    {...props}
                />
                
                <Modal 
                    open={openUploaded}
                    onClose={handleUploadedClose}
                    aria-labelledby="Mic-Modal"
                    aria-describedby="Modal to display the microphone for recording"
                    className={classes.modal}
                    BackdropComponent={Backdrop}
                 >
                    {uploadedBody}
                 </Modal>

            </div>
        </div>
    );
}
 
export default Submission;