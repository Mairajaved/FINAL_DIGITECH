import React from 'react';
import digi from '../assets/digi.png';
import '../styles/About.css';
import cards from '../assets/cards.png';
import Footer from '../components/Footer'
import about from '../assets/about.png'
import abtCard1 from '../assets/abtcard1.png'
import abtCard2 from '../assets/abtcard2.png'
import abtCard3 from '../assets/abtcard3.png'
import abtcard4 from '../assets/abtcard4.png'
import Temp1 from '../assets/temp1.png'
import Temp2 from '../assets/temp2.png'
import Temp3 from '../assets/temp3.png'


export default function About() {
    return (
        <div>
            <div className="aboufirstt">
                <img src={about} alt="" />
            </div>

            <div className="webdev">
                <div className="rightapp">
                    <img src={digi} alt="About Digitech!" />
                </div>
                <div className="leftapp">
                    <h1>About Digitech!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
                        quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur.
                        Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius
                        nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc
                        dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet
                        consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
                    </p>
                </div>
            </div>

            <div className="abtcards">
                <img src={abtCard1} alt="" />
                <img src={abtCard2} alt="" />
                <img src={abtCard3} alt="" />
                <img src={abtcard4} alt="" />
            </div>

            <div className="abtcards">
                <img src={Temp1} alt="Cards" />
                <img src={Temp2} alt="Cards" />
                <img src={Temp3} alt="Cards" />

            </div>
        </div>
    );
}
