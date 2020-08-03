import React,{useState} from 'react';
import './App.css';
// import Navbar from '../Navbar/navbar';
import Login from '../Login/login';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  const existingUsers=[];
  for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      existingUsers.push(JSON.parse(localStorage.getItem(key)));
  }

  const [users,setUsers] = useState([{name:'Dhruv',number:'9810715286',id:1}]); //Change to existingUsers later
  const [currUser,setCurrUser] = useState({name:'', number:'', id:0});

  function addUser(user){
    console.log(user);
    user.id=Math.random();
    localStorage.setItem(user.id,JSON.stringify(user));
    let newUsers = [...users,user];
    setUsers(newUsers);
  }

  function validateUser(number){
    return (users.some((u)=>{
      setCurrUser(u);
      return u.number===number;
    }));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' render={(props)=><Login {...props} validateUser={validateUser}/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;
