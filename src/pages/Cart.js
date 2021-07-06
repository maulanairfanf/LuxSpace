import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import Breadcrumbs from 'components/Breadcrumbs';
import useScrollToTop from 'helpers/hooks/useScrollToTop';

export default function Cart() {
  useScrollToTop()
  return (
    <>
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
    </>
  );
}
