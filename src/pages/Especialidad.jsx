import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import especialidades from '../data/especialidad';

const Especialidad = () => {
  const { id } = useParams();
  const especialidad = especialidades.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!especialidad) {
    return <div className="container">Especialidad no encontrada</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumbSec">
        <div className="overlay"></div>
        <img
          src="/images/breadcum/proyectos.jpeg"
          alt="breadcrumb background"
          className="breadcrumbImage"
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center breadsec">
              <h1 className="breadTitle">ESPECIALIDADES</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projectSingleSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="singleProCaro">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active">
                      <img src={especialidad.images[0]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="1">
                      <img src={especialidad.images[1]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="2">
                      <img src={especialidad.images[2]} alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="3" className="noMarginRight">
                      <img src={especialidad.images[3]} alt="" />
                    </li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img src={especialidad.images[0]} alt="" />
                    </div>
                    <div className="item">
                      <img src={especialidad.images[1]} alt="" />
                    </div>
                    <div className="item">
                      <img src={especialidad.images[2]} alt="" />
                    </div>
                    <div className="item">
                      <img src={especialidad.images[3]} alt="" />
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
                <h2 className="proDetaTitle">{especialidad.title}</h2>
                <p>{especialidad.moreDetails}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="projectSingleInfo">
                <h2 className="projectSininTitle">Información del Proyecto</h2>
                <ul>
                  <li>
                    <span>Fecha de creación:</span> {especialidad.createDate}
                  </li>
                  <li>
                    <span>Ubicación:</span> {especialidad.location}
                  </li>
                  <li>
                    <span>Valor:</span> {especialidad.value}
                  </li>
                  <li>
                    <span>Categoría:</span> {especialidad.category}
                  </li>
                </ul>
              </div>
              <div className="projectSingleText">
                <h2 className="projectSininTitle two">Detalles adicionales</h2>
                <p>{especialidad.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Especialidad;
