import React from "react"
import { NavLink } from "react-router-dom";

function Home({ colors }) {
    // console.log(colors)
    return (
        <div>
            <h1>Color Picker</h1>
            <li><NavLink to="/add">Add New Color</NavLink></li>
            <ul>
                {colors.map(color => {
                    return <li><NavLink to={`/${color}`}>{color}</NavLink></li>
                })}
            </ul>
        </div>
    )

}

export default Home