import React from 'react';

import './HeaderWithContent.css';

const HeaderWithContent = (props) => (
    <div className="header-with-content">
        <div className="header-with-content__wrapper">
            <div className="header-with-content__logo">
                <img src="img/png/logo.png" />
                tajam
            </div>

            <div className="header-with-content__navigation">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Expertise</a>
                <a href="#">Teams</a>
                <a href="#">Works</a>
                <a href="#">People say</a>
                <a href="#">Contact</a>
            </div>

            <div className="header-with-content__mobile-navigation">
                <a href="#" className="fa fa-bars"></a>
            </div>
        </div>

        {/* {props.children} */}
    </div>
);

export default HeaderWithContent;
