import ContactCard from "./ContactCard";

function ContactList(props){
    const contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
    })
    return( 
    <ul>
    {contactsList}
    </ul>
)}
export default ContactList;
