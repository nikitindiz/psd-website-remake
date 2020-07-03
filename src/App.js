import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="container first-section">
          <div className="header wrapper">
            <div className="logo">
              <img src="img/png/logo.png" />
              tajam
            </div>
            <div className="navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Expertise</a>
              <a href="#">Teams</a>
              <a href="#">Works</a>
              <a href="#">People say</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="first-section__banner wrapper">
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
            <a href="#" className="button">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="container second-section">
          <div className="wrapper">
            <div className="big-logo-container">
              <img src="img/png/logo-big.png" />
            </div>
            <div className="content">
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
        <div className="container third-section">
          <div className="wrapper">
            <a href="#">
              <img src="img/png/play.png" />
              <div>
                WATCH OUR STORY
              </div>
            </a>
          </div>
        </div>
        <div className="container fourth-section">
          <div className="wrapper">
            <h2>
              EXPERTISE
            </h2>
            <p>
              Lorem ipsum dolor sit amet proin gravida nibh vel velit
            </p>
            <hr />
            <div className="items-grid">
              <div className="item">
                <img src="img/png/screen.png" />
                <h3>WEB DESIGN &amp; DEVELOPMENT</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
              <div className="item">
                <img src="img/png/pen.png" />
                <h3>BRANDING IDENTITY</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
              <div className="item">
                <img src="img/png/mobile.png" />
                <h3>MOBILE APP</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
              <div className="item">
                <img src="img/png/graph.png" />
                <h3>SEARCH ENGINE OPTIMIZATION</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
              <div className="item">
                <img src="img/png/gameboy.png" />
                <h3>GAME DEVELOPMENT</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
              <div className="item">
                <img src="img/png/heart.png" />
                <h3>MADE WITH LOVE</h3>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </div>
            </div>
          </div>
        </div>
        <div className="container fifth-section">
          <div className="wrapper">
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
        <div className="container sixth-section">
          <div className="wrapper">
            <form>
              <h3>
                GIVE US A GOOD NEWS
              </h3>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea cols={30} rows={10} placeholder="Your Massage" defaultValue={""} />
              <input type="submit" defaultValue="LEARN MORE" className="button" />
            </form>
            <div className="client-logos">
              <h3>
                OUR HAPPY CLIENT
              </h3>
              <div className="client-logo">
                <img src="img/png/Zara_Logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/Logo_of_Mango_(new).png" />
              </div>
              <div className="client-logo">
                <img src="img/png/1280px-Barneys_New_York_Logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/1280px-Gucci_Logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/Calvin_klein_logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/1280px-Logo_NIKE.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/Converse_logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/Puma_Logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/1280px-Levi's_logo.png" />
              </div>
              <div className="client-logo">
                <img src="img/png/Billabong.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container footer">
          <div className="wrapper">
            <div className="column">
              <div className="logo">
                <img src="img/png/logo.png" />
                tajam
              </div>
              <p>
                lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit
              </p>
            </div>
            <div className="column with-header">
              <h5>
                OUR STUDIO
              </h5>
              <p className="with-icon icon-marker">
                Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
                11480 - Indonesia
              </p>
              <p className="with-icon icon-phone">
                (+62) 21-2224 3333
              </p>
            </div>
            <div className="column with-header">
              <h5>
                STAY IN TOUCH
              </h5>
              <div className="subscribe-field">
                <input type="text" placeholder="Subscribe our newsletter" />
                <button>
                  <img src="img/png/paper122.png" />
                </button>
              </div>
              <div className="social-networks-links">
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
            <div className="column footer-links">
              <div className="bottom-links">
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
              <p className="copyright">
                Copyright © 2015 - Tajem Creative
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
