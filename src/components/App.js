import '../App.css';
import '../Css/LoginForm.css'
import '../Css/ContactList.css'
import AddContact from './AddContact'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm';
import UserDetail from './UserDetail';
import EditContact from './EditContact';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [username,setUser]=useState("")
  const [contacts,setContacts]=useState([])
  const [token,setToken]=useState("");
  
  return (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm token={token} setUser={setUser} setContacts={setContacts} setToken={setToken}/>}></Route>
        <Route path="/signup" element={<SignUpForm/>}></Route>
        <Route path="/user/home" element={<UserDetail username={username}  token={token} contacts={contacts} setToken={setToken} setContacts={setContacts} setUser={setUser}/>}></Route>
        <Route path="/user/add" element={<AddContact token={token} contacts={contacts} setContacts={setContacts}/>}></Route>
        <Route path="/user/home/update" element={<EditContact token={token} setContacts={setContacts} contacts={contacts}/>}></Route>
      </Routes>
    </Router> 
      </>
      );
}

export default App;
