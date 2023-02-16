import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';

import React, { useState } from 'react';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navigation handleLinkClick={handleLinkClick} activeLink={activeLink}/>
      <div id="main">
        {activeLink === 'home' && <Home />}
        {activeLink === 'products' && <Products />}
        {activeLink === 'services' && <Services />}
        {activeLink === 'contact' && <Contact/>}
      </div>
    </>
  );
}

export default App;
