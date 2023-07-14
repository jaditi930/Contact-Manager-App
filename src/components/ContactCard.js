import {Link} from 'react-router-dom'

function ContactCard(props){
    // console.log(props)
    return (
    <li>
        <Link to={props.contact._id} state={{name: props.contact.name,phone: props.contact.phoneNumber}}> 
       <div>{props.contact.name}</div> 
       <div>{props.contact.phoneNumber}</div>
       </Link>
       <button onClick={(e)=>{props.deleteContactHandler(props.contact._id)}}>delete</button>
    </li>
    )}
export default ContactCard;