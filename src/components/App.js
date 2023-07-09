import '../App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import { useState } from 'react';
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
    <>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>
    </>
    
  );
}

export default App;
