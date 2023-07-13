import { useNavigate } from 'react-router-dom';

function AddContact (props){
    let contact={
        id:"",
        name:"",
        phone:""
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
                <input type="number" id="phone" onChange={(e)=>{contact.phone=e.target.value}}></input>
            </div>
            <button onClick={()=>{
                 props.addContactHandler(contact);
                  navigate("/")
                  }}>
                Add Contact</button>
        </form>
        </div>
    )
}
export default AddContact