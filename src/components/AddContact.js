import { useNavigate } from 'react-router-dom';

function AddContact (props){
    let contact={
        // id:"",
        "name":"",
        "phoneNumber":""
    }
    const navigate=useNavigate();
    return (
        <div className="">
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e)=>{contact.name=e.target.value}}></input>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" onChange={(e)=>{contact.phoneNumber=e.target.value}}></input>
            </div>
            <button onClick={()=>{
                console.log(props.token)
                 props.addContactHandler(contact);
                  navigate("/user/home",{state:{}})
                  }}>
                Add Contact</button>
        </form>
        </div>
    )
}
export default AddContact