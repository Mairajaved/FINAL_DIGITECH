import React from "react";
import Hero from "../components/Hero";
import service from "../assets/service.png";
// import "../styles/Home.css";
import '../styles/home12.css' // Make sure to import the CSS file
import about from "../assets/abt.png";
import arrow from "../assets/arrow.png";
import price from "../assets/price.png";
import ibm from "../assets/ibm.png";
import center from "../assets/center.png";
import nestle from "../assets/nestle.png";
import del from "../assets/del.png";
import tie from "../assets/tie.png";
import ebay from "../assets/ebay.png";
import man from "../assets/man.png";
import Footer from "../components/Footer";
import InputKota from '../components/InputKota'
import clientImg from '../assets/clients.png'
import connect from '../assets/connect.png'
import ball1 from '../assets/ball1.png'
import ball2 from '../assets/ball2.png'
import ball3 from '../assets/ball3.png'
import ball4 from '../assets/ball4.png'
import ball5 from '../assets/ball5.png'
import ball6 from '../assets/ball6.png'
import ball7 from '../assets/ball7.png'
import { Link } from "react-router-dom";
import Button from '../assets/Button.png'
import '../styles/ServiceCard.css';
import ServImg from '../assets/service.png'

export default function Home() {
  return (
    <>
      <Hero />


      <div className="about">
        <img src={about} alt="About" />
        <div className="about-text">
          <h1>
            Never doubt that a small group of thoughtful, committed citizens can change the world.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row gap-3 d-flex justify-content-center py-3">
          <div className="card bg-white border-0">
            <div className="card-body">
               <img src={ServImg} alt="" />
            </div>
          </div>
          <div className="card">
      <div className="top">
        <h1>IT Consulting</h1>
        <img src={Button} alt="Button Icon" />
      </div>
      <div className="servcontent">
        <p>
          Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
        </p>
        <div className="meracont">
          <input type="text" placeholder="Read More" />
         <Link to="/services">
         <button><img src={arrow} alt="" /></button>
         </Link>
        </div>
      </div>
    </div>  
     <div className="card">
      <div className="top">
        <h1>IT Consulting</h1>
        <img src={Button} alt="Button Icon" />
      </div>
      <div className="servcontent">
        <p>
          Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
        </p>
        <div className="meracont">
          <input type="text" placeholder="Read More" />
         <Link to="/services">
         <button><img src={arrow} alt="" /></button>
         </Link>
        </div>
      </div>
    </div>   <div className="card">
      <div className="top">
        <h1>IT Consulting</h1>
        <img src={Button} alt="Button Icon" />
      </div>
      <div className="servcontent">
        <p>
          Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
        </p>
        <div className="meracont">
          <input type="text" placeholder="Read More" />
         <Link to="/services">
         <button><img src={arrow} alt="" /></button>
         </Link>
        </div>
      </div>
    </div>   <div className="card">
      <div className="top">
        <h1>IT Consulting</h1>
        <img src={Button} alt="Button Icon" />
      </div>
      <div className="servcontent">
        <p>
          Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
        </p>
        <div className="meracont">
          <input type="text" placeholder="Read More" />
         <Link to="/services">
         <button><img src={arrow} alt="" /></button>
         </Link>
        </div>
      </div>
    </div>

        </div>
      </div>


      <div className="prices">
        <div className="priceleft">
          <h1>
            Never doubt that a small group of people can change the world.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img src={price} alt="" />
      </div>

      <div className="marquee-container">
        <marquee behavior="alternate" direction="right" className="marquee">
          <div className="line">
            <img src={ibm} alt="IBM" />
            <img src={center} alt="Center" />
            <img src={nestle} alt="Nestle" />
            <img src={center} alt="Center" />
            <img src={del} alt="Del" />
            <img src={center} alt="Center" />
            <img src={tie} alt="Tie" />
            <img src={center} alt="Center" />
            <img src={ebay} alt="eBay" />
          </div>
        </marquee>
      </div>


      <div className="client">
        <div className="clientleft">
          <img src={clientImg} alt="" />
        </div>
        <div className="clientright">
          <div className="rightup">
            <div className="card1">
              <p>"Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise."</p>
            </div>
            <div className="card2">
              <p>"Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise."</p>
            </div>
          </div>
          <div className="rightlow">
            <div className="card3">
              <p>"Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise."</p>
            </div>
          </div>
        </div>
      </div>


      <div className="like">
        <div className="likes-left">
          <InputKota /> <br />
          <InputKota /> <br />  <InputKota /> <br />   <InputKota /> <br />
          <InputKota />
        </div>
        <div className="likeright">
          <h2>What would you like to know about Kota?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
            quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
          </p>
          <Link to="/contact">
            <button className="likebutton">Talk to us</button>

          </Link>
        </div>
      </div>

      <div className="combine">
        <div className="combcont">
          <div className="tools">Integrate with existing tools</div>
          <h3>Combine. Connect. Contribute.</h3>
          <p>Sync the HR tools you already use to add your team members. We’ll separate them by region and help you set up contributions.</p>
          <div className="all">See all integrations</div>
          <div className="imagescont">
            <div className="ballimages">
              <img src={ball1} alt="" />
              <img src={ball2} alt="" />
            </div>

            <div className="ballimages4">
              <img src={ball4} alt="" />
              <img src={ball5} alt="" />
              <img src={ball6} alt="" />
            </div>
            <div className="ballimages5">
              <img src={ball7} alt="" />
              <img src={ball3} alt="" />

            </div>
          </div>
        </div>

      </div>


    </>
  );
}
