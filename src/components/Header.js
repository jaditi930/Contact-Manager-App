import { useNavigate } from "react-router-dom";

export default function Header(props){
    const navigate=useNavigate();
    return (
        <nav>
            <ul>
                <li style={{marginLeft:45}}>{props.username}</li>
                <li><button onClick={()=>{props.logoutHandler();
                navigate("/");
            }}>Logout</button></li>
            </ul>
        </nav>
    )}