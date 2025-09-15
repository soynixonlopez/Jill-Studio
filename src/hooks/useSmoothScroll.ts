'use client';

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Función para scroll suave personalizado
    const smoothScrollTo = (targetId: string) => {
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerHeight = 80; // Altura del header fijo
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      // Scroll suave con easing personalizado
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 segundo
      let start: number | null = null;

      // Función de easing (ease-in-out)
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Agregar event listeners a todos los enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          smoothScrollTo(href);
        }
      });
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            smoothScrollTo(href);
          }
        });
      });
    };
  }, []);
};
