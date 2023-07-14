import { useLocation, useNavigate } from "react-router-dom"

export default function EditContact(props){
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location)
    return (
        <form>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="namee" defaultValue={location.state.contact.name}></input>
        </div>
        <div>
        <label htmlFor="name">Phone Number</label>
        <input type="number" id="phone" defaultValue={location.state.contact.phoneNumber}></input>
        </div>
        <div>
        <label htmlFor="email">Email id</label>
        <input type="text" id="email" defaultValue={location.state.contact.emailAddress}></input>
        </div>
        <button onClick={(e)=>{
            e.preventDefault();
            const contact={
                "name":document.forms[0].namee.value,
                "phoneNumber":document.forms[0].phone.value,
                "email":document.forms[0].email.value,
            }
            console.log(contact)
            props.updateContactHandler(contact,location.state.contact._id);
            navigate("/user/home")
        }}>Update Contact</button>
        </form>
    )
}