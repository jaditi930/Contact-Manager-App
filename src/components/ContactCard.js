import {Link} from 'react-router-dom'

function ContactCard(props){
    // console.log(props)
    return (
    <li>
        <Link to={props.contact._id} state={{name: props.contact.name,phone: props.contact.phone}}> 
       <div>{props.contact.name}</div> 
       <div>{props.contact.phone}</div>
       </Link>
       <button onClick={(e)=>{props.deleteContactHandler(props.contact._id)}}>delete</button>
    </li>
    )}
export default ContactCard;