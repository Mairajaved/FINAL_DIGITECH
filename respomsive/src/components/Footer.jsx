import React from "react";
import logo from "../assets/logo.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="center">
        <img src={logo} alt="Company Logo" className="logo" />

        <div className="links">
          <Link to="/">Home</Link> | <Link to="/about">About us</Link> | <Link to="/services">Services</Link> | <Link to="/blog">Blog</Link> | <Link to="/pricing">Pricing</Link> | <Link to="/contact">Contact us</Link>
        </div>
        <span>
          Company Registration No. 711366. Registered Office: 128 Baggot Street
          Lower, Dublin 2, D02 A430, Ireland. Yonder Financial Technology Ltd,
          trading as Kota, is an appointed representative of Innovative Risk
          Labs Ltd (FRN: 609155) which is authorised and regulated by the
          Financial Conduct Authority.
        </span>
      </div>
      <div className="blue-left"></div>
      <div className="blue-right"></div>
    </div>
  );
}

export default Footer;
