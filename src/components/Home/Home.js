import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

import BannerImage from '../images/pizza.jpeg';

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Pizza Con</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <button>
                    <Link to="/menu">ORDER NOW</Link>
                </button>
            </div>
        </div>
    )
}

export default Home
