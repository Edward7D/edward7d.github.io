import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

// Estilos en línea
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "280px",
    background: "linear-gradient(to bottom, #f5d9b8, #521b0d)",
    borderRadius: "16px",
    padding: "1.5rem",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    position: "relative",
  },
  logo: {
    width: "60px",
    marginBottom: "0.5rem",
  },
  institucion: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "#2c2c2c",
    marginBottom: "10px",
  },
  foto: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3px solid #fff",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  nombre: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "0.3rem",
  },
  especialidad: {
    fontStyle: "italic",
    fontSize: "14px",
    marginBottom: "0.5rem",
  },
  folio: {
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  lema: {
    fontSize: "11px",
    color: "#dddddd",
    marginBottom: "0.3rem",
  },
  web: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#fff",
  },
};

function UsuariosEspecialidades() {
  const [usuarios, setUsuarios] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await axios.get("http://localhost:4000/cienqro/usuarios-especialidades");
        setUsuarios(res.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchUsuarios();
  }, []);

  // Imagen personalizada 
  const obtenerImagen = (usuario) => {
    const nombre = usuario.nombre.toLowerCase();
    if (nombre.includes("jonathan")) return "/images/cartas/jh.png";
    if (nombre.includes("evelin")) return "/images/cartas/ev.png";
    if (nombre.includes("edu")) return "/images/cartas/ed.png";
    return "/images/cartas/default.png"; // solo una imagen por defecto
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumbSec">
        <div className="overlay"></div>
        <img
          src="/images/breadcum/peritos.jpeg"
          alt="breadcrumb background"
          className="breadcrumbImage"
        />
      </section>

      <div style={styles.container}>
        {usuarios.map((usuario, index) => (
          <div
            key={usuario.id}
            ref={(el) => (cardRefs.current[index] = el)}
            style={styles.card}
          >
            <img src="/images/cartas/15.jpg" alt="CIENQRO Logo" style={styles.logo} />
            <p style={styles.institucion}>
              COLEGIO DE INGENIEROS INDUSTRIALES, ELECTROMECÁNICOS, EN ENERGÍAS Y AFINES DE QUERÉTARO A.C.
            </p>
            <img
              src={obtenerImagen(usuario)}
              alt={`Foto de ${usuario.nombre}`}
              style={styles.foto}
              onError={(e) => (e.target.src = "/images/cartas/default.png")}
            />
            <h4 style={styles.nombre}>Ing. {usuario.nombre} {usuario.apellidos}</h4>
            <p style={styles.especialidad}>
              {usuario.especialidades.length > 0
                ? `Perito en ${usuario.especialidades[0].especialidad}`
                : "Sin especialidad asignada"}
            </p>
            <p style={styles.folio}>CIENQRO-ELEC-01-24/000{usuario.id}</p>
            <p style={styles.lema}>LA INGENIERÍA, PARA EL DESARROLLO ENERGÉTICO DE MÉXICO.</p>
            <p style={styles.web}>CIENQRO.mx</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsuariosEspecialidades;
