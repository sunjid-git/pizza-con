import React from 'react'
import './Contact.css';
import PizzaLeft from '../images/pizzaLeft.jpg';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}>

            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form action="" id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Enter full name..." />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email..." />
                    <label htmlFor="message">Message </label>
                    <textarea name="message" placeholder="Enter message..." rows="6" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
