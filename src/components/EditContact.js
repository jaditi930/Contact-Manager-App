import { useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function EditContact(props){
    const navigate=useNavigate();
    const location=useLocation();
    return (
        <div className="contact_container">
        <form action="" className="form_main">
<p className="contact_heading">Contactly.in</p>
<p className="contact_subheading">Add Contact</p>
<div className="inputContainer">
<svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
</svg>
<input type="text" className="inputField" id="namee" placeholder="Full Name" defaultValue={location.state.contact.name}/>
</div>

<div className="inputContainer">
<FontAwesomeIcon icon={faPhone} className='inputIcon'/>
<input type="numeric" className="inputField" id="phone" placeholder="Phone Number" defaultValue={location.state.contact.phoneNumber}/>
</div>
<div className="inputContainer">
<FontAwesomeIcon icon={faEnvelope} className='inputIcon'/>
<input type="numeric" className="inputField" id="email" placeholder="Email Address" defaultValue={location.state.contact.emailAddress}/>
</div>
      
   
<button id="button" onClick={(e)=>{
    e.preventDefault();
    const contact={
        "name":document.forms[0].namee.value,
        "phoneNumber":document.forms[0].phone.value,
        "emailAddress":document.forms[0].email.value,
    }
    console.log(contact)
    props.updateContactHandler(contact,location.state.contact._id);
    navigate("/user/home")
}}>Update Contact</button>
</form>
</div>
        
        // <form className="form_main">
        // <div>
        // <input type="text" id="namee" defaultValue={location.state.contact.name}></input>
        // </div>
        // <div>
        // <input type="number" id="phone" defaultValue={location.state.contact.phoneNumber}></input>
        // </div>
        // <div>
        // <input type="text" id="email" defaultValue={location.state.contact.emailAddress}></input>
        // </div>
        // <button onClick={(e)=>{
        //     e.preventDefault();
        //     const contact={
        //         "name":document.forms[0].namee.value,
        //         "phoneNumber":document.forms[0].phone.value,
        //         "email":document.forms[0].email.value,
        //     }
        //     console.log(contact)
        //     props.updateContactHandler(contact,location.state.contact._id);
        //     navigate("/user/home")
        // }}>Update Contact</button>
        // </form>
    )
}