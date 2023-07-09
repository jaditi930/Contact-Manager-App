import '../App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


function App() {
  const [contacts,setContacts]=useState([{
      id:"1",name:"Aditi",phone:"1234"},{
      id:"2",name:"Deepti",phone:"1234"
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
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ContactList  contacts={contacts} deleteContactHandler={deleteContactHandler}/>} />
        <Route path="add" element={<AddContact addContactHandler={addContactHandler}/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
