import ContactList from "./ContactList";

export default function UserDetail(props){
return(<>
    <ContactList contacts={props.contacts} deleteContactHandler={props.deleteContactHandler} logoutHandler={props.logoutHandler}></ContactList>
    </>
)}