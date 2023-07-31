import { Link,useLocation } from "react-router-dom";
import mySvg from '../Css/bg.svg'
export default function ContactDetail(){
    const location = useLocation();
    const name = location.state.name;
    const phone=location.state.phone;
    const email=location.state.email;
    return (
    <div className="contact_container" style={{flexDirection:"column"}}>
    <div className="card__">
    <div className="card__img">
    </div>
    <div className="card__avatar">
    <img src={mySvg} height="100" width="100"/>
    </div>
    <div className="card__title">{name}</div>
    <div className="card__subtitle">{phone}</div>
    <div className="card__subtitle">{email}</div>
    <Link to="/user/home"><button id="back_button">Back to Contacts</button></Link>
    </div>
    </div>
    )
}          