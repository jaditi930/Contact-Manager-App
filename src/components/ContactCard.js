import {Link} from 'react-router-dom'

function ContactCard(props){
    let contact=props.contact;
    console.log(contact)
    return (
    <li>
        <Link to={contact._id} state={{
            name: contact.name,phone: contact.phoneNumber, email:contact.emailAddress}}> 
       <div>{contact.name}</div> 
       <div>{contact.phoneNumber}</div>
       <div>{contact.emailAddress}</div>
       </Link>
       <button onClick={(e)=>{props.deleteContactHandler(contact._id)}}>delete</button>
       <Link to="update" state={{contact:contact}}>
       <button>update</button>
       </Link>
    </li>
    )}
export default ContactCard;