import React, { useState } from 'react';

import './HeaderWithContent.css';

const HeaderWithContent = (props) => {
    const [mobileNavOpen, changeMobileNavOpen] = useState(false);

    const toggleMobileNav = () => changeMobileNavOpen(!mobileNavOpen);

    return (
        <div className="header-with-content">
            <div className="header-with-content__container">
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
                    <a
                        onClick={toggleMobileNav}
                        href="#"
                        className="
                            header-with-content__mobile-navigation-button
                            fa fa-bars
                        "
                    />

                    <div
                        className={
                            mobileNavOpen
                                ? 'header-with-content__mobile-navigation-dropdown header-with-content__mobile-navigation-dropdown_open'
                                : 'header-with-content__mobile-navigation-dropdown'
                        }
                    >
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Expertise</a>
                        <a href="#">Teams</a>
                        <a href="#">Works</a>
                        <a href="#">People say</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>

            <div className="header-with-content__children">
                {props.children}
            </div>
        </div>
    );
};

export default HeaderWithContent;
