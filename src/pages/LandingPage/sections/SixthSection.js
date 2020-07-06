import React from 'react';

import './SixthSection.css';

const SixthSection = () => (
    <div className="sixth-section">
        <div className="sixth-section__wrapper">
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

);

export default SixthSection;