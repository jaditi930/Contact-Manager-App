import { useState } from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom'
function ContactList(props){
const navigate=useNavigate();
const [searchValue,setSearchValue]=useState("")
let contactsList;
    if(props.contacts.length>0 && searchValue===""){
    contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
    })
}
    else{
        contactsList=props.contacts.map((contact)=>{
            let conc=contact.name+contact.phoneNumber+contact.emailAddress;
            console.log(conc);
            if (conc.includes(searchValue))
            return <ContactCard  contact={contact} deleteContactHandler={props.deleteContactHandler}/>
        })
    }
    return( 
    <div className="contact_container" style={{}}>
    <div className="contact_list">
    <div id="hover">
    <span style={{color:'#6f10a2',fontWeight:'500'}} onClick={()=>{props.logoutHandler(); 
                navigate("/");
            }}>Logout&nbsp;&nbsp;
    <FontAwesomeIcon icon={faRightFromBracket} size='xl' 
            />
    </span>
    </div>
        <div className="contact_heading">Contactly.in</div>
  <div className="search">
    <input style={{marginLeft:'auto',marginRight:'auto'}} type="text" name="search_bar" placeholder="Search ..." onChange={(e)=>setSearchValue(e.target.value)}></input>
        <Link to="/user/add">
        <FontAwesomeIcon icon={faUserPlus} size='2xl' style={{marginLeft:'20px',color:'#6f10a2'}}/>
        </Link>
    </div>
<ul>
    {contactsList}
</ul>
</div>
</div>
)}
export default ContactList;
