import { useState,useEffect } from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"

function ContactList(props){
 const navigate=useNavigate();
    useEffect(()=>{
        (async ()=>{
            const token=localStorage.getItem("access_token")
            await axios
              .get('https://contacts-backend-alpha.vercel.app/api/users/current',{
                headers:{
                  'Authorization':`Bearer ${token}`
                }
              },)
              .then((response) => {
                props.setContacts(response.data);
              })
              .catch((error) => {
                console.log(error)
              });
            }
        )();
    },[])
const [searchValue,setSearchValue]=useState("")
let contactsList;
    if(props.contacts.length>0 && searchValue===""){
    contactsList=props.contacts.map((contact)=>{
        return <ContactCard  contact={contact} contacts={props.contacts} token={props.token} setContacts={props.setContacts} key={contact._id}/>
    })
}
    else if(searchValue!=""){
        contactsList=props.contacts.map((contact)=>{
            let conc=contact.name+contact.phoneNumber+contact.emailAddress;
            console.log(conc);
            if (conc.includes(searchValue))
            return <ContactCard  contact={contact} contacts={props.contacts} token={props.token} setContacts={props.setContacts} key={contact._id}/>
        })
    }
    function logoutHandler(){
        props.setToken("")
        localStorage.removeItem("access_token");
        
      }
    return( 
    <div className="contact_container" style={{}}>
    <div className="contact_list">
    <div id="hover">
    <span style={{color:'#6f10a2',fontWeight:'500'}} onClick={()=>{logoutHandler(); 
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
)
}
export default ContactList;
