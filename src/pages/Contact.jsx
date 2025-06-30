
function Contact() {
  return (
    <div>

              {/* IMAGEN DE FONDO */}
          <section className="breadcrumbSec">
            <div className="overlay"></div>
            <img
              src="/images/imgFondo/contacto.jpeg"
              alt="breadcrumb background"
              className="breadcrumbImage"
            />

          </section>


      {/* Contact Section */}
      <section className="blogSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="contactInfo">
                <h2 className="commentTitle">Información de Contacto</h2>
                <div className="contAddress">
                  <div className="singleContadds">
                    <i className="fa fa-map-marker"></i>
                    <p>
                      Avenida Miguel Hidalgo #76, Local 14, Plaza Cienega, Colonia Pueblito Centro, Corregidora, QRO, C.P. 76900
                    </p>
                  </div>
                  <div className="singleContadds phone">
                    <i className="fa fa-phone"></i>
                    <p>NO TIENEN - <span>Oficina</span></p>
                    <p>442 269 1186 - <span>Móvil</span></p>
                  </div>
                  <div className="singleContadds">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:contact@example.com">INFORMES@CIENQRO.MX</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-sm-8">
              <h2 className="commentTitle">Envíanos un Mensaje</h2>
              <div className="commentForm">
                <form action="https://formsubmit.co/eduardomtzduarte09@gmail.com" method="POST" id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 formmargin">
                      <input
                        type="text"
                        placeholder="Nombre"
                        name="Nombre"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="Email"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Asunto"
                        name="Asunto"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <textarea
                        placeholder="Mensaje"
                        name="Mensaje"
                        required
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="blogReadmore" id="con_submit">
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="_next" value="http://localhost:5173/"></input>
                  {/* <input type="hidden" name="_next" value="https://edward7d.github.io/"></input>  Cuando se suba al servidor*/}
                  <input type="hidden" name="_captcha" value="false"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Formulario end */}

     {/* Google Map */}
<section className="contactMap">
  <div id="map">
    <iframe
      title="MAPA CIENQRO"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.083631644043!2d-100.44211228444982!3d20.548211579488996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34f63ee1e12c5%3A0xd98566432b937b80!2sCIENQRO%20-%20COLEGIO%20DE%20INGENIEROS%20INDUSTRIALES%2C%20ELECTROMEC%C3%81NICOS%2C%20EN%20ENERG%C3%8DAS%20Y%20AFINES%20DE%20QUER%C3%89TARO!5e0!3m2!1ses!2smx!4v1685123456789!5m2!1ses!2smx"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
    </div>
  )
}

export default Contact
