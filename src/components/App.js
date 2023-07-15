import '../App.css';
import AddContact from './AddContact'
import ContactDetail from './ContactDetail';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm';
import UserDetail from './UserDetail';
import EditContact from './EditContact';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import axios from 'axios';
function App() {
  const [username,setUser]=useState("")
  const [contacts,setContacts]=useState([])
  const [token,setToken]=useState("");

  async function addContactHandler(newContact){
  await axios.post('https://contacts-backend-alpha.vercel.app/api/contacts',newContact,{headers:{
    'Authorization':`Bearer ${token}`
    }})
  .then((response) => {
    if (contacts.length>0)
    setContacts([...contacts,response.data])
    else
    setContacts([response.data])
  })
  .catch((error) => {
    console.log(error)
  });
  }
  window.addEventListener("load", function (e) {
  if(this.window.location.pathname==="/user/home")
    {  setToken(this.localStorage.getItem("access_token"));
      setUser(this.localStorage.getItem("username"));
      currentuser(this.localStorage.getItem("access_token"));  
    }
    else if(this.window.location.pathname==="/")
    {
      let token=this.localStorage.getItem("access_token");
      let user=this.localStorage.getItem("username");
      if(token==null||user==null)
      return;
      setToken(this.localStorage.getItem("access_token"));
      setUser(this.localStorage.getItem("username"));
      this.window.location.href="http://localhost:3000/user/home"
      currentuser(token);
    }
    return null;
  });
  async function deleteContactHandler(id){
    await axios
        .delete(`https://contacts-backend-alpha.vercel.app/api/contacts/${id}`,{
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
  async function updateContactHandler(contact,id){
    await axios
        .put(`https://contacts-backend-alpha.vercel.app/api/contacts/${id}`,contact,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        },)
        .then((response) => {
          let i;
          for(i=0;i<contacts.length;i++)
          {
              if(contacts[i]._id===id)
              break;
          }
        let cons = [...contacts];
        let con = {...contacts[i]};
        con=response.data;
        cons[i] = con;
        setContacts([...cons]);
        })
        .catch((error) => {
          console.log(error)
        })
        .finally({
        });
  };
  
  async function currentuser(token){
    console.log(token);
      await axios
        .get('https://contacts-backend-alpha.vercel.app/api/users/current',{
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
        await axios.post('https://contacts-backend-alpha.vercel.app/api/users/login', body)
      .then(res => {
        access_token=res.data.token
        localStorage.setItem("access_token",access_token);
        localStorage.setItem("username",body["username"]);
        setUser(body["username"])
      })
      .catch(function (error) {
        console.log(error);
      })
      }
     else
     {
      axios.post('https://contacts-backend-alpha.vercel.app/api/users/signup', body)
      .then(res =>console.log(res));
     }
      return access_token;
      };
      function logoutHandler(){
        setToken("")
        setUser("")
        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        
      }
  return (<>
    <Router>
      <Routes>
        <Route path="/user/home/:id" element={<ContactDetail/>}></Route>
        <Route exact path="/" element={<LoginForm loginUser={LoginUser} currentuser={currentuser} token={token} setContacts={setContacts}/>}></Route>
        <Route path="/signup" element={<SignUpForm signupUser={LoginUser}/>}></Route>
      <Route path="/user/home" element={<UserDetail username={username} contacts={contacts} deleteContactHandler={deleteContactHandler} logoutHandler={logoutHandler}/>}></Route>
      <Route path="/user/add" element={<AddContact addContactHandler={addContactHandler} token={token}/>}></Route>
      <Route path="/user/home/update" element={<EditContact updateContactHandler={updateContactHandler}/>}></Route>
      </Routes>
    </Router> 
      </>
      );
}

export default App;
