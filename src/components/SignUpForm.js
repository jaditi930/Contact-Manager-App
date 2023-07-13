export default function SignUpForm(){
return (
    <div>
        <form>
            <div>
            <input type="text" name="username" placeholder="Enter username"></input>
            </div>
            <div>
            <input type="password" name="password" placeholder="Enter password"></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}