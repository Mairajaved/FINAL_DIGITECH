import React from 'react';
import service from '../assets/services.png';
import digi from '../assets/digi.png'; // Make sure to import the image used in the left section
import '../styles/Service.css';

function Services() {
  return (
    <div>
      <div className="services">
        <img src={service} alt="Services" />
      </div>
      <div className="webdev">
        <div className="rightapp">
        <img src={digi} alt="App Development" />
        </div>
        <div className="leftapp">
          <h1>Web Development</h1>
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

      <div className="appdev">
        <div className="newleft">
          <h1>App Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
            quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur.
            Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius
            nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc
            dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet
            consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
          </p>
        </div>
        <div className="newright">
          <img src={digi} alt="App Development" />
        </div>
      </div>
  
      <div className="webdev">
        <div className="rightapp">
        <img src={digi} alt="App Development" />
        </div>
        <div className="leftapp">
          <h1>UI/UX Designing</h1>
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

      <div className="appdev">
        <div className="newleft">
          <h1>Search Engine Optimization (SEO)</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
            quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur.
            Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius
            nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc
            dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet
            consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
          </p>
        </div>
        <div className="newright">
          <img src={digi} alt="App Development" />
        </div>
      </div>

      <div className="webdev">
        <div className="rightapp">
        <img src={digi} alt="App Development" />
        </div>
        <div className="leftapp">
          <h1>Content Creation</h1>
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

      <div className="appdev">
        <div className="newleft">
          <h1>Graphic Designing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
            quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur.
            Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius
            nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc
            dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet
            consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.
          </p>
        </div>
        <div className="newright">
          <img src={digi} alt="App Development" />
        </div>
      </div>
    </div>
  );
}

export default Services;