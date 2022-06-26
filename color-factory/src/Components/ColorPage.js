import React from "react"
import { useParams, NavLink } from "react-router-dom"

function ColorPage() {
    const { color } = useParams()

    console.log(color)

    return (
        <div>
            <div style={{ backgroundColor: color, height: "100vh", width: "100vw", fontSize: "200px" }}>
                <div>{color}</div>
                <NavLink to="/" >Home</NavLink>
            </div>

        </div>

    )
}

export default ColorPage