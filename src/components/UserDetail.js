import ContactList from "./ContactList";
import Header from "./Header";

export default function UserDetail(props){
return(<>
    <Header username={props.username}/>
    <ContactList contacts={props.contacts} deleteContactHandler={props.deleteContactHandler}></ContactList>
    </>
)}