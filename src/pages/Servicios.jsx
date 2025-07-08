import React, { useEffect, useRef } from "react";

function Servicios() {
  const videoRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    const video = videoRef.current;

    if (video) {
      if (isDesktop) {
        video.setAttribute("autoplay", "true");
        video.play().catch((err) =>
          console.warn("Autoplay bloqueado por el navegador:", err)
        );
      } else {
        video.removeAttribute("autoplay");
      }
    }
  }, []);

  return (
    <div>
      {/* IMAGEN DE FONDO */}
      <section className="breadcrumbSec">
        <div className="overlay"></div>
        <img
          src="/images/imgFondo/servicios.jpeg"
          alt="IMAGEN DE FONDO"
          className="breadcrumbImage"
        />
      </section>

      <section className="servicesDetails">
        <div className="container">
          <div className="row">
            {/* VIDEO */}
            <div className="col-md-12 col-sm-12 col-xs-12">
              <video
                className="video-service"
                ref={videoRef}
                controls
                muted
                loop
                playsInline
              >
                <source src="/images/paginaServicios/IPMA.mp4" type="video/mp4" />
              </video>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="col-md-12 descripcionServicio">
              <h4 className="title mt-5">
                Certificación en Dirección de Proyectos con Base en IPMA e Integración al Sistema Nacional de Competencias (CONOCER)
              </h4>
               {/* LOGO CONOCER*/}
            <div className="col-md-12 text-center my-5">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/paginaServicios/conocer.png"
                  alt="Logo CONOCER"
                  style={{ width: "500px", marginBottom: "20px" }}
                />
              </div>
            </div>
              <p className="text-justify" style={{ fontSize: "17px" }}>
                La Base para la Competencia Individual de IPMA es el estándar global para las competencias individuales
                en dirección de proyectos, programas y carteras de proyectos.
              </p>
              <p className="text-justify" style={{ fontSize: "17px" }}>
                La ICB apoya el desarrollo de las competencias individuales a través de la presentación de un inventario completo de los elementos de competencia de forma transversal a proyectos, programas y carteras de proyectos.
              </p>
              <p className="text-justify" style={{ fontSize: "17px" }}>
                Los objetivos de IPMA con la ICB son simples - enriquecer y mejorar la competencia de un individuo en la dirección de proyectos, programas y carteras de proyectos y proporcionar un inventario de las competencias, que si se alcanzan, representan el dominio completo de esos ámbitos de dirección. Los proyectos, programas y carteras de proyectos están a la vanguardia del cambio en el mundo actual. Los proyectos conducen el desarrollo de nuevos productos y servicios, inversiones y expansión, capacidades, la implementación de nuevas estrategias y una nueva generación de infraestructuras. Reconocemos que los proyectos empiezan y acaban con las personas y que el desempeño competente es esencial para todo
                proyecto exitoso.
              </p>
              <p className="text-justify" style={{ fontSize: "17px" }}>
                El estándar de competencia de marca <strong>ECM 0355 Técnico en Administración de Proyectos IPMA </strong>
                México está basado en la Base para la competencia individual en dirección de proyectos Versión 4 de la
                IPMA®.
              </p>
            </div>

            {/* IPMA IMAGEN + MAPA IPMA */}
            <div className="col-md-12 text-center my-5">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/paginaServicios/IPMA.jpeg"
                  alt="IMPA CIENQRO"
                  style={{ width: "700px", marginBottom: "50px", marginTop: "50px" }}
                />

              <p className="text-justify" style={{ fontSize: "17px" }}>
               La Asociación Mexicana de Ingeniería de Proyectos IPMA México, es la única organización del país que está acreditada para promover mejores prácticas en la dirección de proyectos por competencias bajo el modelo de cuatro niveles de IPMA® (International Project Management Association).
              </p>

             <p className="text-center" style={{ fontSize: "17px" }}>
              <strong>El mundo de IPMA® </strong>lo conformamos más de 70 Asociaciones en igual número de naciones.
            </p>
                <img
                  src="/images/paginaServicios/mapIPMA.png"
                  alt="Mapa IPMA"
                  className="img-fluid"
                  style={{ maxWidth: "90%", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
