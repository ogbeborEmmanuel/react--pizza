import React from "react"

const Footer = () => {
    const hour = new Date().getHours()
    const openHours = 8;
    const closeHours = 22;
    const isOpen = hour >= openHours && hour <= closeHours;

    return (
        <div className="footer">
            <div>{isOpen && (
                <div className="order">
                    <p>  we are open until {closeHours}:00 or you can order online</p>
                    <button className="btn">order now</button>
                </div>
            )}</div>

        </div>
    )
}
export default Footer;