import React,{useState} from 'react';
import './App.css';
// import Navbar from '../Navbar/navbar';
import Login from '../Login/login';
import {BrowserRouter,Route} from 'react-router-dom';
import Otp from '../Otp/otp.js';
import Homework from '../Homework/homework';
import Profile from '../Profile/profile';

function App() {
  const existingUsers=[];
  for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      existingUsers.push(JSON.parse(localStorage.getItem(key)));
  }

  const [users,setUsers] = useState([{name:'Dhruv',number:'9810715286',id:1}]); //Change to existingUsers later
  const [currUser,setCurrUser] = useState({name:'Dhruv', number:'9810715286', id:1, school: 'New Era Public School', board:'CBSE', email:'kathpaliadhruv@gmail.com', address:'Tilak Nagar, New Delhi-18', gradesTaught:[{grade: 'VIII-A', subject:'Maths'},{grade: 'VIII-B', subject:'Science'},{grade: 'VIII-C', subject:'English'},{grade: 'VIII-D', subject:'Maths'}]});

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
      </div>
    </BrowserRouter>
  );
}

export default App;
