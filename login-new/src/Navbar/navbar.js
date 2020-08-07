import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Navbar = (props) => {
    return (
      <div className='navbar'>
        <div className='navbar-back'>
          <Link to='/otp'><button className="navbar-back-button"><ArrowBackIosIcon></ArrowBackIosIcon><div>Back</div></button></Link>
        </div>
        <div className='navbar-heading'>
          {props.subject}
        </div>
        <div className='navbar-step'>
          Step 2/2
        </div>
      </div>
    );
}
 
export default Navbar ;