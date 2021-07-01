import React from 'react';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import PageErrorMessage from './PageErrorMessage';

export default function NotFound() {
  return (
    <>
      <Header theme="black" />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
