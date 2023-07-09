import ContactCard from "./ContactCard";
import {Link} from "react-router-dom"
function ContactList(props){

    const contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
    })
    return( <div>
    <ul>
    {contactsList}
    </ul>
    <Link to="add"><button>Add Contact</button></Link>
    </div>
)}
export default ContactList;
