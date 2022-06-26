import React from "react"
import { useParams } from "react-router-dom"
function DogDetails({ dogs }) {
    const { name } = useParams();
    console.log(dogs)

    if (name) {
        const currDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        )
        return (
            <div>
                <h1>{currDog.name}</h1>
                <img src={currDog.src} alt={currDog.name} />
                <p>age: {currDog.age}</p>
                <ul>
                    {currDog.facts.map(fact => {
                        return <li key={fact}>{fact}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default DogDetails