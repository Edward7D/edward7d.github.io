import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function SliderSection() {
const slides = [
  {
    image:'/images/slider/1.jpeg',
  },
  {
    image: '/images/slider/2.jpeg',
  },
  {
    image: '/images/slider/3.jpeg',
  },
  {
    image: '/images/slider/4.jpeg',
  },
];


  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const nextSlide = useCallback((resetInterval = true) => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 500);

    if (resetInterval) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide(false);
      }, 4000);
    }
  }, [slides.length]);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 500);

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide(false);
    }, 4000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide(false);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  const { image, title, subtitle, description } = slides[current];

  const styles = {
    sliderSection: {
      position: 'relative',
      overflow: 'hidden',
      height: '100vh',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
    },
    sliderItem: {
      position: 'relative',
      height: '100%',
    },
    sliderImage: {
      margin: 0,
      height: '100%',
    },
    sliderImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(84, 84, 87, 0.2)',
      /* backgroundColor: 'rgba(84, 84, 87, 0.4)', ORIGINAL  */
      zIndex: 1,
    },
    sliderText: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
      opacity: fade ? 1 : 0,
      transition: 'opacity 0.5s ease',
      zIndex: 2,
    },
    sliderContent: {
      maxWidth: '800px',
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#fff',
    },
    span: {
      color: '#fff', // blanco también para el subtítulo para mantenerlo uniforme
    },
    description: {
      fontSize: '20px',
      marginBottom: '30px',
      color: '#fff',
    },
    sliderBtn: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    themeBtn: {
      padding: '12px 25px',
      fontSize: '16px',
      borderRadius: '4px',
      textDecoration: 'none',
      backgroundColor: '#ff5722',
      color: '#fff',
      transition: 'background 0.3s',
    },
    glassBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #fff',
      color: '#fff',
    },
    arrow: {
      position: 'absolute',
      top: '60%',
      transform: 'translateY(-50%)',
      color: '#fff',
      border: 'none',
      fontSize: '30px',
      padding: '10px',
      cursor: 'pointer',
      zIndex: 3,
      backgroundColor: 'transparent',
    },
    leftArrow: {
      left: '20px',
    },
    rightArrow: {
      right: '20px',
    },
  };

  return (
<section style={styles.sliderSection}>
  <div style={styles.sliderItem}>
    <figure style={styles.sliderImage}>
      <img src={image} alt="slider_img" style={styles.sliderImg} />
      <div style={styles.overlay}></div>
    </figure>
    <div style={styles.sliderText}>
      <div style={styles.sliderContent}>
        <h1 style={styles.title}>
          {title} <span style={styles.span}>{subtitle}</span>
        </h1>
        <p style={styles.description}>{description}</p>
        <div style={{ ...styles.sliderBtn, marginTop: '180px' }}>
          <a href="/About" style={styles.themeBtn}>Conozca más</a>
          <a href="/Contact" style={{ ...styles.themeBtn, ...styles.glassBtn }}>Contáctenos</a>
        </div>
      </div>
    </div>
    {/* Flechas */}
    <button
      style={{ ...styles.arrow, ...styles.leftArrow }}
      onClick={prevSlide}
      aria-label="Anterior"
    >
      &#10094;
    </button>
    <button
      style={{ ...styles.arrow, ...styles.rightArrow }}
      onClick={() => nextSlide()}
      aria-label="Siguiente"
    >
      &#10095;
    </button>
  </div>
</section>

  );
}
