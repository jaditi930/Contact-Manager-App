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
            const username=props.loginUser(1); 
            username.then(function(result) {
                // console.log(result)
            let contacts=props.currentuser();
            contacts.then(function(c) {
                console.log(c);
                navigate("/user/current",{state:{username:result,contacts:c}});
            })
             })
            }}>
            Submit</button>
            </form>
        <div>Don't have an account? <Link to="/signup"><span>SignUp Here!</span></Link></div>
        </div>
    )
    }