import ContactCard from "./ContactCard";

function ContactList(props){
    const contactsList=props.contacts.map((contact)=>{
        return <ContactCard contact={contact}/>
    })
    return( 
    <ul>
    {contactsList}
    </ul>
)}
export default ContactList;
