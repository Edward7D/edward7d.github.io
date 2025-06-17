import React, { useState } from 'react';

const testimonials = [
  {
    text: 'Hay muchas variaciones de los pasajes disponibles, pero la mayoría ha sufrido alteraciones.',
    name: 'JOHN HOE',
    role: 'Diseñador',
    image: 'https://i.pravatar.cc/80?img=3',
  },
  {
    text: 'Los pasajes de Lorem Ipsum disponibles han evolucionado con el tiempo.',
    name: 'MARÍA LÓPEZ',
    role: 'Desarrolladora',
    image: 'https://i.pravatar.cc/80?img=5',
  },
  {
    text: 'Algunos pasajes se modificaron por bromas inyectadas o contenido sin sentido.',
    name: 'CARLOS RIVERA',
    role: 'Analista UX',
    image: 'https://i.pravatar.cc/80?img=8',
  },
  {
    text: 'Excelente servicio y gran atención al cliente.',
    name: 'LUCÍA GÓMEZ',
    role: 'Project Manager',
    image: 'https://i.pravatar.cc/80?img=10',
  },
  {
    text: '¡Muy recomendable! El equipo fue muy profesional.',
    name: 'ANDRÉS PÉREZ',
    role: 'Ingeniero',
    image: 'https://i.pravatar.cc/80?img=12',
  },
  {
    text: 'Una experiencia increíble desde el primer momento.',
    name: 'SOFÍA RAMÍREZ',
    role: 'Consultora',
    image: 'https://i.pravatar.cc/80?img=15',
  },
];

const Testimonios = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const itemsPerGroup = 3;
  const totalGroups = Math.ceil(testimonials.length / itemsPerGroup);

  const styles = {
    section: {
      padding: '40px 0',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    title: {
      fontSize: '28px',
      marginBottom: '30px',
    },
    groupWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    card: {
      flex: '1 1 300px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f4f4f4',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '320px',
    },
    image: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '15px',
      objectFit: 'cover',
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0 5px',
    },
    role: {
      color: 'gray',
      marginBottom: '10px',
    },
    text: {
      fontSize: '16px',
      color: '#333',
    },
    dotsContainer: {
      marginTop: '25px',
    },
    dot: {
      display: 'inline-block',
      width: '12px',
      height: '12px',
      margin: '0 6px',
      backgroundColor: '#ccc',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    dotActive: {
      backgroundColor: '#333',
    },
  };

  const getCurrentGroupTestimonials = () => {
    const start = currentGroup * itemsPerGroup;
    return testimonials.slice(start, start + itemsPerGroup);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Nuestros Testimonios</h2>
        <div style={styles.groupWrapper}>
          {getCurrentGroupTestimonials().map((testimonial, index) => (
            <div key={index} style={styles.card}>
              <img src={testimonial.image} alt={testimonial.name} style={styles.image} />
              <p style={styles.text}>{testimonial.text}</p>
              <h3 style={styles.name}>{testimonial.name}</h3>
              <p style={styles.role}>{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Puntos indicadores */}
        <div style={styles.dotsContainer}>
          {[...Array(totalGroups)].map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentGroup ? styles.dotActive : {}),
              }}
              onClick={() => setCurrentGroup(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
