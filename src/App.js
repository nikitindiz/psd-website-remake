import React from 'react';
import './App.css';

import HeaderBanner from './components/HeaderBanner';
import HeaderWithContent from './components/HeaderWithContent';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <div className="App">
      <div>
        <HeaderWithContent>
          <HeaderBanner />
        </HeaderWithContent>

        {/* <LandingPage /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
