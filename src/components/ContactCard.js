function ContactCard(props){
    return (
    <li>
       <div>{props.contact.name}</div> 
       <div>{props.contact.phone}</div>
    </li>
    )}
export default ContactCard;