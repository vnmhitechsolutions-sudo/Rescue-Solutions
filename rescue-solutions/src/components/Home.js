import React from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;