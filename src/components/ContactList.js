import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
function ContactList(props){
console.log(props)
let contactsList;
    if(props.contacts.length>0)
    contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
    })
    return( <div>
    <ul>
    {contactsList}
    </ul>
    <Link to="/user/add"><button>Add Contact</button></Link>
    </div>
)}
export default ContactList;
