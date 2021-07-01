import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import Breadcrumbs from 'components/Breadcrumbs';

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumbs
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shooping Cart' },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
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
