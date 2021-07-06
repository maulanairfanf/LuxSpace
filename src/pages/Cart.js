import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import Document from 'parts/Document';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import Breadcrumbs from 'components/Breadcrumbs';

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      <Breadcrumbs
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shooping Cart' },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </Document>
  );
}
