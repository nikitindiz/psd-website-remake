import React from 'react';

const LandingPage = () => (
    <>
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
    </>
);

export default LandingPage;
