import { useNavigate } from "react-router-dom"

export default function SignUpForm(props){
    const navigate=useNavigate();
return (
    <div>
        <form>
            <div>
            <input type="text" name="username" placeholder="Enter username"></input>
            </div>
            <div>
            <input type="password" name="password" placeholder="Enter password"></input>
            </div>
            <div>
            <input type="password" name="confirm_password" placeholder="Confirm password"></input>
            </div>
            <button type="submit" onClick={(e)=>{e.preventDefault(); props.signupUser(0);
            navigate("/");}
            }>Submit</button>
        </form>
    </div>
)
}