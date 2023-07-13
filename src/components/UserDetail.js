import { useLocation } from "react-router-dom"
import ContactList from "./ContactList";

export default function UserDetail(){
    const location=useLocation();
    console.log(location.state.contacts)
return(<>
    <div>{location.state.username}</div>
    <ContactList contacts={location.state.contacts}></ContactList>
    </>
)}