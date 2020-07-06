import React from 'react';

import './FifthSection.css';

const FifthSection = () => (
    <div className="fifth-section">
        <div className="fifth-section__wrapper">
            <h2>
                MEET OUR AMAZING TEAM
              </h2>
            <p>
                Lorem ipsum dolor sit amet proin gravida nibh vel velit
              </p>
            <hr />
            <div className="cards-row">
                <div className="card">
                    <div className="image-placeholder" />
                    <div className="image-footer">
                        <h4>SEMF UCUK</h4>
                        <p>CEO &amp; FOUNDER</p>
                    </div>
                </div>

                <div className="card">
                    <div className="image-placeholder" />
                    <div className="image-footer">
                        <h4>DIK ADALIN</h4>
                        <p>ENGINEERING</p>
                    </div>
                </div>

                <div className="card">
                    <div className="image-placeholder" />
                    <div className="image-footer">
                        <h4>JENG KOL</h4>
                        <p>DESIGNER</p>
                    </div>
                </div>

                <div className="card">
                    <div className="image-placeholder" />
                    <div className="image-footer">
                        <h4>PET ROMAK</h4>
                        <p>MARKETING</p>
                    </div>
                </div>
            </div>
            <p>
                Become part of our dream team, let’s join us !
            </p>
            <p>
                <a href="#" className="button">
                    WE ARE HIRING
                </a>
            </p>
        </div>
    </div>

);

export default FifthSection;