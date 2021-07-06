import React from 'react';
import Document from 'parts/Document';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Sitemap from 'parts/Sitemap';
import PageErrorMessage from './PageErrorMessage';

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
}
