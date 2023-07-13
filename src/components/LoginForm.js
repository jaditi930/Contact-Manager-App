import {Link,useNavigate} from 'react-router-dom'
export default function LoginForm(props){
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
            <button onClick={(e)=>{
            e.preventDefault();
            const token=props.loginUser(1); 
            token.then(function(result) {
            props.currentuser(result);
            navigate("/user/home");
             })
            }}>
            Submit</button>
            </form>
        <div>Don't have an account? <Link to="/signup"><span>SignUp Here!</span></Link></div>
        </div>
    )
    }