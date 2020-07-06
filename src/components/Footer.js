import React from 'react';

import './Footer.css';

const Footer = (props) => (
  <div className="footer">
    <div className="footer__wrapper">
      <div className="footer__column">
        <div className="footer__logo">
          <img src="img/png/logo.png" />
                  tajam
        </div>
        <p>
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit
        </p>
      </div>
      <div className="footer__column">
        <h5>
          OUR STUDIO
        </h5>
        <p className="footer__block-with-icon footer__block-with-icon_icon-marker">
          Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
          11480 - Indonesia
        </p>
        <p className="footer__block-with-icon footer__block-with-icon_icon-phone">
          (+62) 21-2224 3333
        </p>
      </div>
      <div className="footer__column footer__column_full-width-on-mobile">
        <h5>
          STAY IN TOUCH
        </h5>

        <div className="footer__subscribe-field">
          <input type="text" placeholder="Subscribe our newsletter" />
          <button>
            <img src="img/png/paper122.png" />
          </button>
        </div>

        <div className="footer__social-networks-links">
          <a href="#">
            <img src="img/png/facebook.png" />
          </a>
          <a href="#">
            <img src="img/png/twitter.png" />
          </a>
          <a href="#">
            <img src="img/png/dribbble.png" />
          </a>
          <a href="#">
            <img src="img/png/instagram.png" />
          </a>
          <a href="#">
            <img src="img/png/gplus.png" />
          </a>
          <a href="#">
            <img src="img/png/youtube.png" />
          </a>
        </div>
      </div>
      <div className="footer__column footer__column_footer-links">
        <div className="footer__bottom-links">
          <a href="#">
            HELP
          </a>
          <a href="#">
            TERMS &amp; CONDITION
          </a>
          <a href="#">
            PRIVACY
          </a>
        </div>

        <p className="footer__copyright">
          Copyright © 2015 - Tajem Creative
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
