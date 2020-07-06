import React from 'react';

import './HeaderBanner.css';

const HeaderBanner = (props) => (
    <div className="first-section__banner">
        <h1>
            We Are Awesome Creative Agency
        </h1>
        <hr />
        <p>
            This is Photoshop's version  of Lorem Ipsum.
            Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>
        <a href="#" className="first-section__banner-button">
            LEARN MORE
        </a>
    </div>
);

export default HeaderBanner;
