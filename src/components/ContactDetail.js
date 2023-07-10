import { Link,useLocation } from "react-router-dom";

export default function ContactDetail(){
    const location = useLocation();
    const name = location.state.name;
    const phone=location.state.phone;
    return (<>
    <div>{name}</div>
    <div>{phone}</div>
    <Link to="/"><button>Back to Contacts</button></Link>

    </>)
}          