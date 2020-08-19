import React,{useState} from 'react';
import './App.css';
// import Navbar from '../Navbar/navbar';
import Login from '../Login/login';
import {BrowserRouter,Route} from 'react-router-dom';
import Otp from '../Otp/otp.js';
import Homework from '../Homework/homework';
import Profile from '../Profile/profile';
import EditProfile from '../EditProfile/editprofile';
import Submission from '../Submission/submission';
import defaultProfile from '../images/profile.jpg';
// import HwInfo from '../HwInfo/hwinfo';

function App() {
  const existingUsers=[];
  for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      existingUsers.push(JSON.parse(localStorage.getItem(key)));
  }

  const [users,setUsers] = useState([{name:'Dhruv',number:'9810715286',id:1, school: 'New Era Public School', board:'', email:'kathpaliadhruv@gmail.com', address:'Tilak Nagar, New Delhi-18', preview:'profile.jpg', gradesTaught:[{id: 1, grade: 'VIII-A', subject:'Maths'},{id: 2, grade: 'VIII-B', subject:'Science'},{id: 3, grade: 'VIII-C', subject:'English'},{id: 4, grade: 'VIII-D', subject:'Maths'}]}]); //Change to existingUsers later
  const [currUser,setCurrUser] = useState({name:'Dhruv', number:'9810715286', id:1, school: 'New Era Public School', board:'', email:'kathpaliadhruv@gmail.com', address:'Tilak Nagar, New Delhi-18', preview:'profile.jpg', gradesTaught:[{id: 1, grade: 'VIII-A', subject:'Maths'},{id: 2, grade: 'VIII-B', subject:'Science'},{id: 3, grade: 'VIII-C', subject:'English'},{id: 4,grade: 'VIII-D', subject:'Maths'}]});

  function editUser(user){
    console.log(user);
    setCurrUser(user);

  }

  function addUser(user){
    // console.log(user);
    user.id=Math.random();
    setCurrUser(user);
    localStorage.setItem(user.id,JSON.stringify(user));
    let newUsers = [...users,user];
    setUsers(newUsers);
  }

  function validateUser(number){
    return (users.some((u)=>{
      setCurrUser(u);
      console.log(u);
      return u.number===number;
    }));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' render={(props)=><Login {...props} validateUser={validateUser}/>} />
        <Route path='/otp' render={(props)=><Otp {...props} />} />
        <Route path='/homework' render={(props)=><Homework {...props} subject='Maths' class='VIII-F' dueDate='11-08-2020'/>} />
        <Route path='/profile' render={(props)=><Profile {...props} user={currUser} />} />
        <Route path='/edit_profile' render={(props)=><EditProfile {...props} user={currUser} editUser={editUser}/>} />
        <Route path='/submission' render={(props)=><Submission {...props} user={currUser} subject='Maths' class='VIII-F' dueDate='11-08-2020' />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
