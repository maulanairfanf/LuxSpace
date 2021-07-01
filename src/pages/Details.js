import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

import Sitemap from 'parts/Sitemap';

import Breadcrunbs from 'components/Breadcrumbs';

export default function Detais() {
  return (
    <>
      <Header theme="black" />

      <Breadcrunbs
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/91231', name: 'Office Room' },
          { url: '/categories/91231/products/7888', name: 'Details' },
        ]}
      />
      <Sitemap />
      <Footer />
    </>
  );
}
