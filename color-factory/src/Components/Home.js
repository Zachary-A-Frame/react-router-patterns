import React from "react"
import { NavLink } from "react-router-dom";

function Home({ colors }) {
    console.log(colors)
    return (
        <div>
            <h1>Color Picker</h1>
            <ul>
                <li><NavLink to="/add">Add New Color</NavLink></li>
                <li><NavLink to="/green">Green</NavLink></li>
                <li><NavLink to="/red">red</NavLink></li>
                <li><NavLink to="/purple">purple</NavLink></li>
                {/* {colors.map(color => {
                    return <li><NavLink to={`/${color}`} />{color}</li>
                })} */}
            </ul>
        </div>
    )

}

export default Home