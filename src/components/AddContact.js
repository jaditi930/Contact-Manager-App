function AddContact(){
    return (
        <div className="">
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"></input>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone"></input>
            </div>
            <button type="submit">Add Contact</button>
        </form>
        </div>
    )
}
export default AddContact