import React from "react";
import "../index.css"

const Menu = ({ pizza }) => {
    const { name, ingredients, price, photoName, soldOut } = pizza
    return (

        <li className={`pizza ${soldOut ? "Sold-out" : ""}`} key={name}>
            <img src={photoName} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{ingredients}</p>
                <p>{price}</p>
                {soldOut ? <p>Sold out</p> : ""}
            </div>


        </li>
    )
}
export default Menu;