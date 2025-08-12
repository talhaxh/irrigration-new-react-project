import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import SolarCalculator from '../components/SolarCalculator';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Products />
      <SolarCalculator />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}