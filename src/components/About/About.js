import React from 'react'; 
import './About.css';

import miltiplePizzas from '../images/multiplePizzas.jpeg'
function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${miltiplePizzas})`}}>
                
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam voluptate consequatur inventore repellendus totam blanditiis tempora sequi debitis quos nostrum, labore deleniti fuga possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, corporis accusamus deserunt ab iste, rem necessitatibus beatae doloremque perferendis neque hic at voluptatibus, sint vel.</p>
            </div>
        </div>
    )
}

export default About
