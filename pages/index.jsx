import Head from 'next/head';
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
      <Head>
        <title>Royal Irrigation System - Smart Agriculture Solutions</title>
        <meta name="description" content="Transform your agriculture with Royal Irrigation System's smart solutions. Drip irrigation, solar systems, and modern farming technology for increased yield and reduced costs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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