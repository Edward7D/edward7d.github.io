import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function SliderSection() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  // Imágenes por defecto si no hay imágenes desde el backend
  const defaultSlides = [
    { image: '/images/slider_default/1.jpeg' },
    { image: '/images/slider_default/2.jpeg' },
  ];

  // Obtener imágenes desde backend
  const fetchSlides = async () => {
    try {
      const res = await fetch('http://localhost:4000/cienqro/slider');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setSlides(data);
      } else {
        setSlides(defaultSlides);
      }
    } catch (err) {
      console.error('Error cargando imágenes del slider:', err);
      setSlides(defaultSlides);
    }
  };

  useEffect(() => {
    fetchSlides();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   // Función para avanzar al siguiente slider
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

   // Inicia el autoplay del slider cada 4 segundos
  useEffect(() => {
    if (slides.length > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide(false);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [slides.length, nextSlide]);

  if (slides.length === 0) return null;

  // Determina si la imagen es local o viene del backend
  const { image } = slides[current];
  const isFromBackend = image.includes('uploads'); // si contiene la palabra "uploads", es del backend
  const fullImagePath = isFromBackend
    ? `http://localhost:4000/${image.replace(/^\/?/, '')}`  // backend
    : image; // frontend (React public/)


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
      opacity: fade ? 1 : 0,
      transition: 'opacity 0.5s ease',
      zIndex: 2,
    },
    sliderBtn: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '180px',
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
          <img src={fullImagePath} alt="slider_img" style={styles.sliderImg} />
          <div style={styles.overlay}></div>
        </figure>
        <div style={styles.sliderText}>
          <div style={styles.sliderBtn}>
            <a href="/About" style={styles.themeBtn}>Conozca más</a>
            <a href="/Contact" style={{ ...styles.themeBtn, ...styles.glassBtn }}>Contáctenos</a>
          </div>
        </div>
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
