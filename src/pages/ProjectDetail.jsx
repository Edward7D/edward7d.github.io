import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="container">Proyecto no encontrado</div>;
  }

  return (
    <>
      {/* IMAGEN DE FONDO */}
      <section className="breadcrumbSec">
        <div className="overlay"></div>
        <img
          src="/images/imgFondo/proyectos.jpeg"
          alt="breadcrumb background"
          className="breadcrumbImage"
        />
      </section>

      <section className="projectSingleSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="singleProCaro">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active">
                      <img src={project.images[0]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="1">
                      <img src={project.images[1]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="2">
                      <img src={project.images[2]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="3" className="noMarginRight">
                      <img src={project.images[3]} alt="" />
                    </li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img src={project.images[0]} alt="" />
                    </div>
                    <div className="item">
                      <img src={project.images[1]} alt="" />
                    </div>
                    <div className="item">
                      <img src={project.images[2]} alt="" />
                    </div>
                    <div className="item">
                      <img src={project.images[3]} alt="" />
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="projectDetais">
                <h2 className="proDetaTitle">{project.title}</h2>
                <p>{project.moreDetails}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="projectSingleInfo">
                <h2 className="projectSininTitle">Información del Proyecto</h2>
                <ul>
                  <li>
                    <span>Fecha de creación:</span> {project.createDate}
                  </li>
                  <li>
                    <span>Ubicación:</span> {project.location}
                  </li>
                  <li>
                    <span>Valor:</span> {project.value}
                  </li>
                  <li>
                    <span>Categoría:</span> {project.category}
                  </li>
                </ul>
              </div>
              <div className="projectSingleText">
                <h2 className="projectSininTitle two">Detalles adicionales</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
