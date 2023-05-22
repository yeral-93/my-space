import { useEffect, useState } from "react"
import { get } from "../../services/ApiSpace";
import './styleNavigationBar.scss'

export const NavigationBar = () => {
    const [users, handleUsers] = useState([]);
    const getLinks = async() => {
        const getlink = await get('principal_navBar');
        handleUsers(getlink);
    }

    useEffect(() => {        
        getLinks();
    }, [])

return(
    <div className="link_Home">
        <ul>{
        users.map(link => <li key={link.id}><a href='{link.link}'>{link.id} {link.name}</a></li>)
        }</ul>
    
    </div>
    )
    }
