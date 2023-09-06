import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrashCan,faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


function ContactCard(props){
    let contact=props.contact;  //current contact
    async function deleteContactHandler(id){
        await axios
            .delete(`https://contacts-backend-alpha.vercel.app/api/contacts/${id}`,{
              headers:{
                'Authorization':`Bearer ${props.token}`
              }
            },)
            .then((response) => {
              console.log(response.data.message);
              const updatedContacts=props.contacts.filter((contact)=>{
                return contact._id!==id;
              })
              props.setContacts(updatedContacts);
            })
            .catch((error) => {
              console.log(error)
            });
      };
    return (
    <li className="contact_card">
      <FontAwesomeIcon icon={faUser} size="xl" style={{paddingRight:"20px",marginTop:"10px" ,color:"#6f10a2"}}/>

       <div style={{marginRight:"25px"}}>
       <div>{contact.name}</div> 
       <div>{contact.phoneNumber}</div>
       <div>{contact.emailAddress}</div>
       </div>
       <div style={{marginLeft:'auto',}}><Link to="update" state={{contact:contact}}>
       <FontAwesomeIcon icon={faPenToSquare} size='xl' style={{marginRight:"15px" ,color: "#6f10a2"}}/></Link></div>
       <span><FontAwesomeIcon icon={faTrashCan} size='xl' onClick={(e)=>{deleteContactHandler(contact._id)}} style={{color: "#6f10a2",cursor:'pointer'}} /></span>

    </li>
    )}
export default ContactCard;