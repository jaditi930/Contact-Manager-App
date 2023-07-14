import { useState } from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
function ContactList(props){
const [searchValue,setSearchValue]=useState("")
console.log(props)
let contactsList;
    if(props.contacts.length>0&&searchValue==""){
    contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
    })
}
    else{
        contactsList=props.contacts.map((contact)=>{
            let conc=contact.name+contact.phoneNumber;
            console.log(conc);
            if (conc.includes(searchValue))
            return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
        })
    }
    return( <div>
    <input type="text" name="search_bar" onChange={(e)=>setSearchValue(e.target.value)}></input>
    <ul>
    {contactsList}
    </ul>
    <Link to="/user/add"><button>Add Contact</button></Link>
    </div>
)}
export default ContactList;
