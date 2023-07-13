import '../App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetail from './ContactDetail';
import { useState } from 'react';
import LoginForm from './LoginForm'
import { BrowserRouter as Router,Routes,Route,Link, useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import axios from 'axios';
import UserDetail from './UserDetail';

function App() {
  const [contacts,setContacts]=useState([{
      id:"1",name:"Aditi",phone:"1234"},{
      id:"2",name:"Deepti",phone:"5678"
  }])
  function addContactHandler(contact){
    contact.id=contacts.length+1;
    const newContacts=[...contacts,contact]
   setContacts(newContacts)
  }
  function deleteContactHandler(id){
    const updatedContacts=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(updatedContacts)
  }
  
  async function currentuser(){
    var obj={};
      await axios
        .get('http://localhost:5000/api/users/current',{
          withCredentials:true
        })
        .then((response) => {
          // console.log(response.data)
          obj=response.data
        })
        .catch((error) => {
          console.log(error)
        });
      return obj;
  }
    const LoginUser =  async (flag) => {
      const body={
        "username": document.forms[0].username.value,
        "password": document.forms[0].password.value,
     }
     var username=""
     if (flag)
      {
        await axios.post('http://localhost:5000/api/users/login', body)
      .then(res => {
        username=res.data.user.username; 
        console.log(res.cookies)
      })
      .catch(function (error) {
        console.log(error);
      })
      }
     else
     {
      axios.post('http://localhost:5000/api/users/signup', body)
      .then(res =>username=res.data.user.username);
     }
     console.log(username)
      return username;
      };
  return (<>
    <Router>
      <Routes>
        <Route exact path="/contacts" element={<ContactList  contacts={contacts} deleteContactHandler={deleteContactHandler}/>}></Route>
        {/*<Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}></Route>
        <Route path="/:id" element={<ContactDetail/>}></Route> */}
        <Route exact path="/" element={<LoginForm loginUser={LoginUser} currentuser={currentuser}/>}></Route>
        <Route path="/signup" element={<SignUpForm signupUser={LoginUser}/>}></Route>
      <Route path="/user/current" element={<UserDetail/>}></Route>
      </Routes>
    </Router> 
      </>
      );
}

export default App;
