import { SiX } from "react-icons/si"; // Logo de X (Twitter)

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <footer>
        <div id="footer">
          <div className="container">
            <div className="col-md-12 col-xs-12">
              <div className="inside">
                <div className="contact-info">
                  <div className="col-md-4 col-xs-12 m-margin">
                    <h4>Teléfono</h4>
                    <p>
                      <a href="tel:07938857242">442 269 1186</a>
                    </p>
                  </div>
                  <div className="col-md-4 col-xs-12 m-margin">
                    <h4>Correo electrónico</h4>
                    <p>
                      <a href="mailto:info@example.com">INFORMES@CIENQRO.MX</a>
                    </p>
                  </div>
                  <div className="col-md-4 col-xs-12 m-margin">
                    <h4>Dirección</h4>
                    <p>Avenida Miguel Hidalgo #76, Local 14, Plaza Cienega, Colonia Pueblito Centro, Corregidora, QRO, C.P. 76900</p>
                  </div>
                </div>
                <div className="social col-md-12">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <SiX className="social-icon" />
                  </a>
                  <a href="https://www.facebook.com/ColegioCienQro" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.youtube.com/@CIENQRO" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <p>
              © {/* 2025 */} <span className="theme_color">CIENQRO</span> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
}

export default Footer;
