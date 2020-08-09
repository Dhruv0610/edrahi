import React, { useState } from 'react';
import './editprofile.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const EditProfile = (props) => {

    const [user,setUser] = useState(props.user);
    const [grade,setGrade] = useState({id: 0,class: '',subject:'', section:''});
    const [imagePath,setImagePath] = useState(props.user.preview);

    function handleInputChange(e){
        setUser({
            ...user,
            [e.target.id]:[e.target.value]
        });
        //console.log(user);
    }

    function handleGradeRemove(id){
        //console.log(id);
        const newGrades = user.gradesTaught.filter((value) => value.id!==id);
        setUser({
            ...user,
            gradesTaught: newGrades
        })
    }

    function handleAddGrade(e){
        setGrade({
            ...grade,
            [e.target.id]: e.target.value
        })
        //console.log(grade);
    }

    function handleGradeSubmit(){
        let gradesTaught=user.gradesTaught;
        grade.id=Math.random();
        const values = Object.values(grade);
        for(const value of values){
            if(value=='' || value==null)
                return;
        }
        gradesTaught.push({id: Math.random(), grade:`${grade.class}`+'-'+`${grade.section}`, subject: grade.subject })
        setUser({
            ...user,
            gradesTaught: gradesTaught
        })
    }

    function handleImageInput(e){
        console.log(e.target.files[0]);
        setUser({
            ...user,
            preview: e.target.files[0].name
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        handleGradeSubmit();
        props.editUser(user);
        props.history.push('/profile');
    }

    const GradesList = user.gradesTaught.map(grade=>{
        return(
            <div className='grades-remove' key={grade.id} id={grade.id}>
                <div className='grade-subject-icon'>
                    <img src={require(`../images/${grade.subject}.png`)} alt={grade.subject}></img>
                </div>
                <div className='grade'>
                    {grade.grade}
                </div>
                <div className='grade-remove-icon' >
                    <HighlightOffIcon color='secondary' onClick={()=>handleGradeRemove(grade.id)}/>
                </div>
            </div>
        )
    });

    return (
        <div className='edit-profile'>
            <div className='edit-header'>
                <h1>Edit your Profile</h1>
                <div className='save-button'>
                    <button type='submit' onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <div className='profile-image-preview'>
                <img src={require(`../images/${user.preview}`)} alt='preview'></img>
                <input type='file' id='file' accept='image/*' onChange={handleImageInput}></input>
                <label htmlFor="file">Update Image</label>
            </div>
            <form className='profile-form'>
                <input type='text' id='name' placeholder='Enter your name' onChange={handleInputChange}></input>
                <input type='email' id='email' placeholder='Enter your email address' onChange={handleInputChange}></input>
                <input type='text' id='number' placeholder='Enter your mobile number' onChange={handleInputChange}></input>
                <input type='text' id='school' placeholder='Enter your school name' onChange={handleInputChange}></input>
                <input type='text' id='address' placeholder='Enter your address' onChange={handleInputChange}></input>
            </form>
            <div className='grades-container'>
                {GradesList}
            </div>
            <form className='add-new-class'>
                <div className='new-class-heading'>
                    Add a new class
                </div>
                <select id='board' onChange={handleInputChange}>
                    <option value="" disabled selected hidden>Select your board</option>
                    <option value='CBSE'>CBSE</option>
                    <option calue='ICSE'>ICSE</option>
                </select>
                <select id='class'  onChange={handleAddGrade}>
                    <option value="" disabled selected hidden>Select standard</option>
                    <option value='VI'>VI</option>
                    <option calue='VII'>VII</option>
                </select>
                <select id='subject'  onChange={handleAddGrade}>
                    <option value="" disabled selected hidden>Select subject</option>
                    <option value='Maths'>Maths</option>
                    <option calue='Science'>Science</option>
                </select>
                <select id='section'  onChange={handleAddGrade}>
                    <option value="" disabled selected hidden>Select section</option>
                    <option value='A'>A</option>
                    <option calue='B'>B</option>
                </select>
            </form>
        </div>
    );
}
 
export default EditProfile;