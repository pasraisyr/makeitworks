import React from 'react';
import NavHeader from '../components/NavHeader';
import Hero from '../sections/Hero';
import AboutUs from '../sections/AboutUs';
import VisionMission from '../sections/VisionMission';
import WhatWeOffer from '../sections/WhatWeOffer';
import MeetTheTeam from '../sections/MeetTheTeam';
import ContactUs from '../sections/ContactUs';
import Footer from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Hero />
        <AboutUs />
        <VisionMission />
        <WhatWeOffer />
        <MeetTheTeam />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
