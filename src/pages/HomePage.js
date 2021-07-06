import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Clients from 'parts/Clients';
import Hero from 'parts/HomePage/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Sitemap from 'parts/Sitemap';
import Document from 'parts/Document';

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Document>
  );
}
