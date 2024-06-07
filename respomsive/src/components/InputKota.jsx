import React, { useState } from 'react';
import plus from '../assets/plus.png';
import '../styles/InputKota.css';

function InputKota() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="inpcont">
      <div className="abiwalacont">
        <input type="text" placeholder="What is Kota?" />
        <img 
          src={plus} 
          alt="Add content" 
          className="plus-icon" 
          onClick={toggleContent} 
        />
      </div>
      {isContentVisible && (
        <div className="inpcontent">
          <p>This is the content that appears when you click the plus icon.</p>
        </div>
      )}
    </div>
  );
}

export default InputKota;
