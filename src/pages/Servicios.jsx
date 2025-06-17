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
      {/* Breadcrumb */}
      <section className="breadcrumbSec">
        <div className="overlay"></div>
        <img
          src="/images/breadcum/servicios.jpeg"
          alt="breadcrumb background"
          className="breadcrumbImage"
        />
      </section>

      <section className="servicesDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <video
                className="video-servicios"
                ref={videoRef}
                controls
                muted
                loop
                playsInline
              >
                <source
                  src="/images/servicios/videoser1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12 descripcionColegio">
              <h4 className="title mt-5">
                Forma parte del Colegio de Ingenieros Industriales,
                Electromecánicos, en Energías y Afines de Querétaro
              </h4>
              <p className="text-left">
                El Colegio es la comunidad profesional que reúne a los ingenieros más
                comprometidos con el desarrollo tecnológico, la innovación y la
                transformación responsable de la sociedad. Aquí fortalecemos nuestras
                competencias técnicas, compartimos experiencias, y generamos redes de
                colaboración que trascienden sectores e industrias.
              </p>

              <p className="text-left">
                <strong>Al unirte, accedes a:</strong>
              </p>
              <ul className="beneficios">
                <li>✅ Capacitaciones especializadas</li>
                <li>✅ Congresos y eventos de alto nivel</li>
                <li>✅ Actualización constante en normativas y tecnologías</li>
                <li>✅ Vinculación con empresas, gobierno y academia</li>
                <li>✅ Reconocimiento profesional en el sector eléctrico y energético</li>
              </ul>

              <p className="text-left">
                Impulsamos juntos un futuro más sostenible, seguro y energéticamente
                eficiente. Súmate al Colegio. Construyamos el cambio desde la
                ingeniería.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
