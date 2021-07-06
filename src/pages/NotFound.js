import React from 'react';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import PageErrorMessage from './PageErrorMessage';
import useScrollToTop from 'helpers/hooks/useScrollToTop';

export default function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header theme="black" />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
