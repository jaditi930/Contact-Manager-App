import '../App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import { useState } from 'react';
function App() {
  const [contacts,setContacts]=useState([{
      name:"Aditi",phone:"1234"},{
      name:"Deepti",phone:"1234"
  }])
  function addContactHandler(contact){
    const newContacts=[...contacts,contact]
   setContacts(newContacts)
  }
  return (
    <>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </>
    
  );
}

export default App;
