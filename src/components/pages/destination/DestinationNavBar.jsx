import React, { useEffect, useState } from 'react'
import { get } from '../../../services/ApiSpace';
import { NavLink } from 'react-router-dom';
import "./styleNavBarDestination.scss";


const DestinationNavBar = () => {

const [link, handleLink] = useState([]);
const getLinksDestination = async () => {
  const getlink = await get("destination");
  handleLink(getlink);
};

useEffect(() => {
  getLinksDestination();
  console.log(link);
}, []);

  return (
    <div className="divLinksDestination">
        {link.map((link) => (
     <div>
     <ul>
       <li>
       <NavLink>{link.name}</NavLink>
       </li>
     </ul>
   </div>
        ))}
    </div>
  )
}

export default DestinationNavBar