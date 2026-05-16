"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll logic for Next.js if needed, but CSS smooth scroll usually handles it.
    // However, since we are doing standard anchors:
    if (targetId.startsWith('#') && targetId !== '#') {
      const element = document.querySelector(targetId);
      if (element) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          <span className="leaf-icon">🌿</span>
          <span className="logo-text">Nature&apos;s Cure</span>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#physician" onClick={(e) => handleLinkClick(e, '#physician')}>The Physician</a></li>
          <li><a href="#products" onClick={(e) => handleLinkClick(e, '#products')}>Products</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
        </ul>
        <button 
          className="mobile-menu-btn" 
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
