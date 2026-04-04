/**
 * Portfolio — interactions
 * Keeps it light: Intersection Observer for navigation + reveal,
 * a mild parallax on section titles, and smooth scroll.
 */

(function () {
  'use strict';

  // ── Intersection Observer: Active section tracking ──────────
  const sections = document.querySelectorAll('.section');
  const indexLinks = document.querySelectorAll('.index-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          indexLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // ── Smooth scroll on index click ────────────────────────────
  indexLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Reveal on scroll ───────────────────────────────────────
  const revealTargets = [
    ...document.querySelectorAll('.project'),
    ...document.querySelectorAll('.lab-note'),
    ...document.querySelectorAll('.approach-column'),
    ...document.querySelectorAll('.lesson'),
    ...document.querySelectorAll('.personal-block'),
    ...document.querySelectorAll('.section-header'),
  ];

  revealTargets.forEach((el) => el.classList.add('reveal'));

  // Stagger groups
  document.querySelectorAll('.lab-grid, .tool-tags').forEach((el) => {
    el.classList.add('reveal-stagger');
    // Also mark as reveal for the observer
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // ── Subtle parallax on section titles ──────────────────────
  const parallaxTitles = document.querySelectorAll('.parallax-title');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && parallaxTitles.length > 0) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxTitles.forEach((title) => {
            const rect = title.getBoundingClientRect();
            const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
            // Very subtle: max 15px shift
            const shift = centerOffset * 0.04;
            title.style.transform = `translateY(${Math.max(-15, Math.min(15, shift))}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Landing fade on scroll ─────────────────────────────────
  const landing = document.querySelector('.landing-content');
  const scrollHint = document.querySelector('.scroll-hint');

  if (landing && !prefersReducedMotion) {
    let landingTicking = false;

    window.addEventListener('scroll', () => {
      if (!landingTicking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight * 0.5;
          const progress = Math.min(scrollY / maxScroll, 1);

          landing.style.opacity = 1 - progress * 0.7;
          landing.style.transform = `translateY(${progress * -30}px)`;

          if (scrollHint) {
            scrollHint.style.opacity = 1 - progress * 3;
          }

          landingTicking = false;
        });
        landingTicking = true;
      }
    });
  }
})();
