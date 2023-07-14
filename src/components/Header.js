export default function Header(props){
    return (
        <nav>
            <ul>
                <li style={{marginLeft:45}}>{props.username}</li>
            </ul>
        </nav>
    )}