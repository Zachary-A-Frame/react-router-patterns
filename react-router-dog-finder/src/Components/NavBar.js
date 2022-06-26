import React from "react"
import { NavLink } from "react-router-dom";


function NavBar({ dogs }) {
    return (
        <div>
            <ul>
                {dogs.map(dog =>
                    <li key={dog.name}><NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>
                )}
            </ul>
        </div>
    )

}

export default NavBar