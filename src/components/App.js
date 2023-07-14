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
  const [contacts,setContacts]=useState([])
  const [token,setToken]=useState("");
  async function addContactHandler(newContact){
    console.log(newContact)
  await axios.post('http://localhost:5000/api/contacts',newContact,{headers:{
    'Authorization':`Bearer ${token}`
    }})
  .then((response) => {
    console.log(response.data)
    setContacts([...contacts,response.data])
  })
  .catch((error) => {
    console.log(error)
  });
  }
  async function deleteContactHandler(id){
    console.log("hello")
    await axios
        .delete(`http://localhost:5000/api/contacts/${id}`,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        },)
        .then((response) => {
          console.log(response.data.message);
          const updatedContacts=contacts.filter((contact)=>{
            return contact._id!==id;
          })
          setContacts(updatedContacts);
        })
        .catch((error) => {
          console.log(error)
        });
  };
  
  async function currentuser(token){
    console.log(token)
      await axios
        .get('http://localhost:5000/api/users/current',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        },)
        .then((response) => {
          setContacts(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
  }
    const LoginUser =  async (flag) => {
      const body={
        "username": document.forms[0].username.value,
        "password": document.forms[0].password.value,
     }
     var access_token="";
     if (flag)
      {
        await axios.post('http://localhost:5000/api/users/login', body)
      .then(res => {
        console.log(res.data.token)
        access_token=res.data.token
        setToken(res.data.token); 
      })
      .catch(function (error) {
        console.log(error);
      })
      }
     else
     {
      axios.post('http://localhost:5000/api/users/signup', body)
      .then(res =>console.log(res));
     }
      return access_token;
      };
  return (<>
    <Router>
      <Routes>
        <Route path="/user/home/:id" element={<ContactDetail/>}></Route>
        <Route exact path="/" element={<LoginForm loginUser={LoginUser} currentuser={currentuser} token={token} setContacts={setContacts}/>}></Route>
        <Route path="/signup" element={<SignUpForm signupUser={LoginUser}/>}></Route>
      <Route path="/user/home" element={<UserDetail contacts={contacts} deleteContactHandler={deleteContactHandler}/>}></Route>
      <Route path="/user/add" element={<AddContact addContactHandler={addContactHandler} token={token}/>}></Route>
      </Routes>
    </Router> 
      </>
      );
}

export default App;
