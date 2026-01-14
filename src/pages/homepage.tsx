'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/homepage.module.css';
import logo from '../app/logo.svg';

// Import Artwork images
import a1 from '../artImages/a1.jpg';
import a2 from '../artImages/a2.jpg';
import img1 from '../artImages/1.jpg';
import img2 from '../artImages/2.jpg';
import img3 from '../artImages/3.jpg';
import img4 from '../artImages/4.jpg';
import img5 from '../artImages/5.jpg';
import img6 from '../artImages/6.jpg';
import img7 from '../artImages/7.jpg';
import img8 from '../artImages/9.jpeg';
import img9 from '../artImages/10.jpg';
import img10 from '../artImages/11.jpg';
import img11 from '../artImages/12.jpg';
import img12 from '../artImages/13.jpg';

const artworkImages = [a1, a2, img1, img2, img3, img4];
const photographyImages = [img5, img6, img7, img8, img9, img10, img11, img12];

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCollection, setCurrentCollection] = useState<'artwork' | 'photography'>('artwork');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  const openLightbox = (index: number, collection: 'artwork' | 'photography') => {
    setCurrentImage(index);
    setCurrentCollection(collection);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const currentImages = currentCollection === 'artwork' ? artworkImages : photographyImages;

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    }

    if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage, currentCollection]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className={`${styles.container} ${lightboxOpen ? styles.blurred : ''}`}>
        <header className={styles.header}>
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={menuOpen ? styles.open : ''}></span>
            <span className={menuOpen ? styles.open : ''}></span>
            <span className={menuOpen ? styles.open : ''}></span>
          </button>

          <div className={styles.logoSection}>
            <Image src={logo} alt="Ally Santana Logo" className={styles.logo} width={80} height={80} />
            <h1 className={styles.title}>Ally Santana</h1>
          </div>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <a href="#home" onClick={() => { setMenuOpen(false); }}>Home</a>
            <div
              className={styles.dropdown}
              onMouseEnter={() => !menuOpen && setPortfolioOpen(true)}
              onMouseLeave={() => !menuOpen && setPortfolioOpen(false)}
              onClick={() => menuOpen && setPortfolioOpen(!portfolioOpen)}
            >
              <a href="#portfolio" className={styles.dropdownToggle}>
                Portfolio
              </a>
              {(portfolioOpen || menuOpen) && (
                <div className={styles.dropdownMenu}>
                  <button onClick={() => scrollToSection('artwork')}>Artwork</button>
                  <button onClick={() => scrollToSection('photography')}>Photography</button>
                </div>
              )}
            </div>
            <a href="https://www.instagram.com/ally24_/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>About</a>
            <a href="mailto:allysantana917@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </header>

        <main className={styles.main}>
          <section id="artwork" className={styles.artworkSection}>
            <div className={styles.grid}>
              {artworkImages.map((img, index) => (
                <div
                  key={`artwork-${index}`}
                  className={styles.artworkItem}
                  onClick={() => openLightbox(index, 'artwork')}
                >
                  <Image
                    src={img}
                    alt={`Artwork ${index + 1}`}
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>

          <div id="photography" className={styles.divider}>
            <h2>Photography</h2>
          </div>

          <section className={styles.photographySection}>
            <div className={styles.grid}>
              {photographyImages.map((img, index) => (
                <div
                  key={`photo-${index}`}
                  className={styles.artworkItem}
                  onClick={() => openLightbox(index, 'photography')}
                >
                  <Image
                    src={img}
                    alt={`Photography ${index + 1}`}
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {lightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={goToPrevious} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.lightboxImage}>
              <Image
                src={currentImages[currentImage]}
                alt={`${currentCollection} ${currentImage + 1}`}
                width={2000}
                height={2000}
                style={{ maxWidth: '80vw', maxHeight: '85vh', width: 'auto', height: 'auto' }}
                priority
              />
            </div>

            <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={goToNext} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className={styles.mobileNavButtons} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.navButton} ${styles.mobileNavButton}`} onClick={goToPrevious} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`${styles.navButton} ${styles.mobileNavButton}`} onClick={goToNext} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
