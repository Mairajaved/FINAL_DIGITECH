import React from 'react';
import '../styles/ServiceCard.css';
import Button from '../assets/Button.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

function ServiceCard() {
  return (
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
  );
}

export default ServiceCard;
