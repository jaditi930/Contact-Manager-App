import { Link,useLocation } from "react-router-dom";

export default function ContactDetail(){
    const location = useLocation();
    const name = location.state.name;
    const phone=location.state.phone;
    const email=location.state.email;
    return (<>
    <div>{name}</div>
    <div>{phone}</div>
    <div>{email}</div>
    <Link to="/user/home"><button>Back to Contacts</button></Link>

    </>)
}          