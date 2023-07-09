import ContactCard from "./ContactCard";

function ContactList(props){
    const contactsList=props.contacts.map((contact)=>{
        return <ContactCard contact={contact} key={contact.username}/>
    })
    console.log(contactsList)
    return( 
    <ul>
    {contactsList}
    </ul>
)}
export default ContactList;
