import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import Breadcrumbs from 'components/Breadcrumbs';

export default function Congratulations() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumbs
        list={[
          { url: '/', name: 'Home' },
          { url: '/congratulations', name: 'Success Checkout' },
        ]}
      />
     
      <Sitemap />
      <Footer />
    </>
  );
}
