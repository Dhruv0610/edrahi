import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

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
    modalHeading: {
        fontSize: 24,
        fontWeight: "bold"
    },
    modalText: {
        color: 'gray',
        marginTop: 10,
        marginBottom: 20,
        width: '75%'
    },
}));

const UploadModal = (props) => {
    const classes = useStyles();

    return ( 
        <div className={classes.paper}>
            <div className={classes.shareIcon}>
                <CheckCircleOutlineRoundedIcon style={{fontSize: 30}}/>
            </div>
            <div className={classes.modalHeading}>
                Well Done!
            </div>
            <div className={classes.modalText}>
                You have submitted your {props.subject} homework. Keep it up.
            </div>
        </div>
    );
}
 
export default UploadModal;