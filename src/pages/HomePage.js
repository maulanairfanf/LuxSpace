import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Clients from 'parts/Clients';
import Hero from 'parts/HomePage/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Sitemap from 'parts/HomePage/Sitemap';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
