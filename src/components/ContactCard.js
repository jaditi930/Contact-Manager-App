function ContactCard(props){
    return (
    <li>
       <div>{props.contact.name}
       <button onClick={(e)=>{props.deleteContactHandler(props.contact.id)}}>delete</button>
       </div> 
       <div>{props.contact.phone}</div>
    </li>
    )}
export default ContactCard;