'use client'
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset = 70; // Adjust this value based on your fixed header height or other elements
      const sectionTop = section.getBoundingClientRect().top;
      const offsetPosition = sectionTop + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={scrollToSection}>
      {children}
    </ScrollContext.Provider>
  );
};
