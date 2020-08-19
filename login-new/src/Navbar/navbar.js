import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Navbar = (props) => {
    return (
      <div className='navbar'>
        <div className='navbar-heading'>
          <div className='navbar-back'>
            <Link to='/otp'><button className="navbar-back-button"><ArrowBackIosIcon></ArrowBackIosIcon><div>Back</div></button></Link>
          </div>
          <div className='navbar-heading'>
            Homework
          </div>
        </div>
        <div className='navbar-subject'>
          <div className='subject-icon'>
            <img src={require(`../images/${props.subject}.png`)} alt={props.subject}></img>
          </div>
          <div className='subject-about'>
            <div className='subject-heading'>
              {props.subject}
            </div>
            <div className='subject-duedate'>
              <b>Due Date: </b>{props.dueDate}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Navbar ;