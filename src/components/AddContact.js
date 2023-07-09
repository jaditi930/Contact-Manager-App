function AddContact (props){
    let contact={
        name:"",
        phone:""
    }
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
            <button type="submit" onClick={(e)=>{e.preventDefault(); props.addContactHandler(contact)}}>Add Contact</button>
        </form>
        </div>
    )
}
export default AddContact