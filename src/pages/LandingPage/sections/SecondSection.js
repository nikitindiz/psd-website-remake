import React from 'react';

import './SecondSection.css';

const SecondSection = () => (
    <div className="second-section">
        <div className="second-section__wrapper">
            <div className="second-section__big-logo-container">
                <img src="img/png/logo-big.png" />
            </div>

            <div className="second-section__content">
                <h2>
                        OUR STORY
                </h2>

                <p>
                    This is Photoshop's version  of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh
                    id elit. Duis sed odio sit amet nibh vulputate cursus
                </p>

                <p style={{ marginBottom: '20px' }}>
                    Morbi accumsan ipsum velit. Nam nec tellus a odio
                    tincidunt auctor a ornare odio. Sed non  mauris vitae
                    erat consequat auctor eu in elit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>

                <a href="#" className="button">
                    LEARN MORE
                </a>
            </div>
        </div>
    </div>
);

export default SecondSection;