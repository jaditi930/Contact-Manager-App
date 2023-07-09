function ContactCard(props){
    return (
    <li key={props.key}>
        {props.contact.name}
    </li>
    )}
export default ContactCard;