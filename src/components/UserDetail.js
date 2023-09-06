import ContactList from "./ContactList";

export default function UserDetail(props){

return(<>
    <ContactList contacts={props.contacts} token={props.token} setToken={props.setToken} setContacts={props.setContacts} setUser={props.setUser}/>
    </>
)}