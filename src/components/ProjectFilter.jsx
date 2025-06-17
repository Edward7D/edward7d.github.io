import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectFilter = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenModal, setImagenModal] = useState(null);

  // Función para abrir modal con la imagen seleccionada
  const abrirModal = (imagen) => {
    setImagenModal(imagen);
    setModalAbierto(true);
  };

  // Función para cerrar modal
  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenModal(null);
  };

  return (
    <section id="project_sec" className="commonSection fillterProject">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center portfolio_sec">
              <div className="themeHeadding black">
                <h2>Proyectos Realizados</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="filterCont d-flex flex-wrap">
            {projects.map(project => (
              <div key={project.id} className="col-md-3 col-sm-4 col-xs-6 project_secs">
                <div className="singlePortfolio">
                  <div className="portfolioImg">
                    <img src={project.images[0]} alt={project.title} />
                  </div>
                  <div 
                    className="portfolioHover" 
                    style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}
                  >
                    <Link 
                      to={`/proyecto/${project.id}`} 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px 16px',
                        fontSize: '14px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        minWidth: '110px',
                        height: '36px',
                        cursor: 'pointer'
                      }}
                    >
                      <i className="fa fa-link" style={{ marginRight: '6px' }}></i> Ver Proyecto
                    </Link>

                    <button 
                      className="popUp" 
                      onClick={() => abrirModal(project.images[0])} 
                      aria-label={`Ampliar imagen del proyecto ${project.title}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px 16px',
                        fontSize: '14px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        minWidth: '110px',
                        height: '36px',
                        cursor: 'pointer'
                      }}
                    >
                      <i className="fa fa-search-plus" style={{ marginRight: '6px' }}></i> Ampliar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para ampliar imagen */}
        {modalAbierto && (
          <div 
            className="modalOverlay" 
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
            }}
            onClick={cerrarModal} // cierra modal si clicas fuera
          >
            <div 
              className="modalContent" 
              style={{ position: 'relative', background: '#fff', padding: 10, borderRadius: 4 }}
              onClick={e => e.stopPropagation()} // evita cerrar modal al clicar dentro
            >
              <button 
                onClick={cerrarModal} 
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 5,
                  background: 'transparent',
                  border: 'none',
                  fontSize: 24,
                  cursor: 'pointer',
                  color: '#333'
                }}
                aria-label="Cerrar modal"
              >
                &times;
              </button>
              <img 
                src={imagenModal} 
                alt="Imagen ampliada" 
                style={{ maxWidth: '90vw', maxHeight: '80vh' }} 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectFilter;
