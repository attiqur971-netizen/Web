"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhysicianProfile from '../components/PhysicianProfile';
import ProductsGallery from '../components/ProductsGallery';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Animation logic
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    // Trigger once on load
    revealOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <PhysicianProfile />
      <ProductsGallery />
      <Footer />
    </main>
  );
}
