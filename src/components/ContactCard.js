import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrashCan,faUser } from '@fortawesome/free-solid-svg-icons'

function ContactCard(props){
    let contact=props.contact;
    return (
    <li className="contact_card">
        <FontAwesomeIcon icon={faUser} size="xl" style={{paddingRight:"20px",marginTop:"10px" ,color:"#6f10a2"}}>
        <Link to={contact._id} state={{
            name: contact.name,phone: contact.phoneNumber, email:contact.emailAddress}}></Link>
        </FontAwesomeIcon>

       <div style={{marginRight:"25px"}}>
       <div>{contact.name}</div> 
       <div>{contact.phoneNumber}</div>
       <div>{contact.emailAddress}</div>
       </div>
       <div style={{marginLeft:'auto',}}><Link to="update" state={{contact:contact}}>
       <FontAwesomeIcon icon={faPenToSquare} size='xl' style={{marginRight:"15px" ,color: "#6f10a2"}}/></Link></div>
       <span><FontAwesomeIcon icon={faTrashCan} size='xl' onClick={(e)=>{props.deleteContactHandler(contact._id)}} style={{color: "#6f10a2",cursor:'pointer'}} /></span>

    </li>
    )}
export default ContactCard;