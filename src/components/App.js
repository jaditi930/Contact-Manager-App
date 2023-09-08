import '../App.css';
import '../Css/LoginForm.css'
import '../Css/ContactList.css'
import AddContact from './AddContact'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm';
import EditContact from './EditContact';
import ContactList from './ContactList';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [contacts,setContacts]=useState([])
  const [token,setToken]=useState("");

  return (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm token={token} setToken={setToken}/>}></Route>
        <Route path="/signup" element={<SignUpForm/>}></Route>
        <Route path="/user/add" element={<AddContact token={token} contacts={contacts} setContacts={setContacts}/>}></Route>
        <Route path="/user/home" element={<ContactList contacts={contacts} token={token} setToken={setToken} setContacts={setContacts}/>}></Route>
        <Route path="/user/home/update" element={<EditContact token={token} setContacts={setContacts} contacts={contacts}/>}></Route>
      </Routes>
    </Router> 
      </>
      );
}
export default App;
