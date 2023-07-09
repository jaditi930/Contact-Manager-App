import '../App.css';
import ContactList from './ContactList'
import AddContact from './AddContact'
import { useState } from 'react';
function App() {
  const [contacts,setContacts]=useState([
    {name:"Aditi"},{name:"Deepti"}
  ])
  return (
    <>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </>
    
  );
}

export default App;
