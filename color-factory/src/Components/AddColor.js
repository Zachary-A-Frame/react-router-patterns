import React from "react"
import { useNavigate } from "react-router-dom"

const AddColor = ({ handleAdd }) => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target[0].value)
        handleAdd(event.target[0].value)
        // 👇️ redirect to /
        navigate(`/${event.target[0].value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">
                Color:
                <input type="text" name="name"  />
            </label>
            <input type="submit" value="Submit" />
        </form>

    )
}

export default AddColor