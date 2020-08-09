import React, { useState } from 'react';
import defaultProfile from '../images/profile.jpg';
import './profile.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    //const [preview,setPreview] = useState(defaultProfile);

    function calcProfileCompletion(user){
        let count = 0, total = 0;
        const values = Object.values(user);
        for(const value of values){
            if(value === null || value === ''){
                count=count+1;
            }
            total=total+1;
        }
        return Math.round((total-count)*100/total);
    }

    const GradesList = props.user.gradesTaught.map(grade=>{
        return(
            <div className='grades' key={grade.id}>
                <div className='grade-subject-icon'>
                    <img src={require(`../images/${grade.subject}.png`)} alt={grade.subject}></img>
                </div>
                <div className='grade'>
                    {grade.grade}
                </div>
            </div>
        )
    });


    const profileCompletion = (calcProfileCompletion(props.user)===100) ? undefined
                                                                        :
                                                                        <div className='profile-completion'>
                                                                            <p>Help us know you better. Seems your profile is just {calcProfileCompletion(props.user)}% complete</p>
                                                                        <Link to='/edit_profile'>    
                                                                            <div className='edit-icon-bottom'>
                                                                                <EditIcon color='primary' style={{fontSize: '25px'}} />
                                                                            </div>
                                                                        </Link>
                                                                        </div>;
    
    return (
        <div className='profile'>
            <div className='profile-header'>
                <Link to='/edit_profile'>
                    <div className='edit-icon'>
                        <EditIcon color='primary' style={{fontSize: '25px'}} />
                    </div>
                </Link>
                <div className='profile-image'>
                    <img src={require(`../images/${props.user.preview}`)} alt='preview'></img>
                </div>
                <div className='profile-name'>
                    {props.user.name}
                </div>
                <div className='profile-info'>
                    {props.user.school} : {props.user.board}
                </div>
            </div>
            <div className='details-heading'>Contact Details</div>
            <div className='contact-details'>
                <p className='user-email'>{props.user.email}</p>
                <FiberManualRecordIcon color='disabled' style={{fontSize: '50%'}}/>
                <p className='user-number'>{props.user.number}</p>
            </div>
            <div className='details-heading'>Location</div>
            <div className='location'>
                {props.user.address}
            </div>
            <div className='details-heading'>Grades you teach</div>
            <div className='grades-container'>
                {GradesList}
            </div>
            {profileCompletion}
        </div>
    );
}
 
export default Profile;