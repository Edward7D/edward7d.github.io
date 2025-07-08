import ProjectFilter from "../components/ProjectFilter"
import SliderSection from "../components/SliderSection"
import Testimonios from "../components/Testimonios"
import Comisiones from "../components/Comisiones";
import PartnerScrollCarousel from "../components/PartnerScrollCarousel"
import { Link } from 'react-router-dom';


function Home() {
  return (
    
    <div>
      

      {/* <!--Slider Section Start--> */}

      <SliderSection/>

      {/* <!--Slider Section  End--> */}

      {/*  <!-- Nosotros Incio de Pagina Section START --> */} 
      <section id="about_sec" className="commonSection aboutCont">
        <div className="container">
          <div className="row">
            {/* Columna del texto */}
            <div className="col-md-6 col-sm-12">
              <div className="about-cont">
                <div className="encabezado-tema" >
                  <h2>
                    Únete al Colegio de Ingenieros Industriales, Electromecánicos, en Energías y Afines de Querétaro A.C.
                  </h2>
                </div>
                <p className="justificado">
                  ¿Eres ingeniero y quieres formar parte de una comunidad que impulsa tu crecimiento profesional? El Colegio de Ingenieros Industriales, Electromecánicos, en Energías y Afines de Querétaro es el punto de encuentro de los mejores talentos en ingeniería industrial, electromecánica, energética y disciplinas afines.
                  Aquí promovemos el desarrollo técnico, la innovación constante y la ética profesional como pilares para transformar nuestro entorno. Al integrarte, accedes a una red sólida de expertos, cursos, capacitaciones, webinars, talleres y actividades exclusivas que fortalecen tu perfil y amplían tus oportunidades.
                </p>
                <p className="justificado">
                  Únete a profesionales expertos para integrar nuestra red de formación de peritos en sus diferentes especialidades.
                  Juntos impulsamos proyectos que construyen un futuro más sostenible, confiable y energéticamente eficiente. Sé parte del cambio. Sé parte de CIENQRO.
                </p>
                <a href="/Servicios" className="boton-tema">Saber Más</a>
              </div>
            </div>

            {/* Columna del video */}
            <div className="col-md-6 col-sm-12 columna-video">
              <div className="marco-video">
              <video className="video-ajustado" controls autoPlay loop muted onPlay={() => {
              const video = document.querySelector('.video-ajustado');
              video.muted = false;  // Desactivar el mute cuando el video empieza
            }}> <source src="/images/Inicio/video1.mp4" type="video/mp4" />
              </video>
                {/* <video className="video-ajustado" controls autoPlay muted loop>
                  <source src={`${process.env.PUBLIC_URL}/images/about/video1.mp4`} type="video/mp4" />
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <!-- Nosotros Incio de Pagina Section END --> */}

      {/* <!--Service Section Start--> */}

      <section className="commonSection service_sec bggray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="themeHeadding white">
                <h2>Especialidades del Colegio</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
              <Link to="/especialidad/1">
              <img
                src="/images/servicios/1.jpeg"
                alt="Especialidad 1"
                className="service-img"
              />
              </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                 <Link to="/especialidad/2">
              <img
                src="/images/servicios/2.jpeg"
                alt="Especialidad 2"
                className="service-img"
              />
              </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                 <Link to="/especialidad/3">
              <img
                src="/images/servicios/3.jpeg"
                alt="Especialidad 3"
                className="service-img"
              />
              </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                 <Link to="/especialidad/4">
              <img
                src="/images/servicios/4.jpeg"
                alt="Especialidad 4"
                className="service-img"
              />
              </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <Link to="/especialidad/5">
              <img
                src="/images/servicios/5.jpeg"
                alt="Especialidad 5"
                className="service-img"
              />
              </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/6.jpeg"
                  alt="Especialidad 6"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/7.jpeg"
                  alt="Especialidad 7"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/8.jpeg"
                  alt="Especialidad 8"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/9.jpeg"
                  alt="Especialidad 9"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/10.jpeg"
                  alt="Especialidad 10"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/11.jpeg"
                  alt="Especialidad 11"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/12.jpeg"
                  alt="Especialidad 12"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/13.jpeg"
                  alt="Especialidad 13"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/14.jpeg"
                  alt="Especialidad 14"
                  className="service-img"
                />
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service text-center">
                <img
                  src="/images/servicios/15.jpg"
                  alt="Especialidad 15"
                  className="service-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Service Section End--> */}

      {/*TEAM/COMITE INICIO START*/}

      <Comisiones/>

      {/* TEAMS INCIO END */}

      {/* <!--Project Fillter Start--> */}

      <ProjectFilter/>

      {/* <!--Project Fillter End--> */}

      {/* <!--Testimonios Start--> */}

      <Testimonios />

      {/* <!--Testimonios End--> */}

  {/*<!-- countert section Start --> */}
      <section id="stats" className="commonSection">
         <div className="container">
            <div className="content" id="counter">
               <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="countdown">
                     <div className="counticon">
                        <i className="fa fa-university"></i>
                        <span className="counter-value" data-count="720">0</span>
                        <h3>UVIE/UI</h3>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="countdown">
                     <div className="counticon">
                        <i className="fa fa-users"></i>
                        <span className="counter-value" data-count="72">0</span>
                        <h3>CORRESPONSABILIDADES</h3>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="countdown">
                     <div className="counticon">
                        <i className="fa fa-balance-scale"></i>
                        <span className="counter-value" data-count="720">0</span>
                        <h3>PERITAJES</h3>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-3 col-xs-6">
                  <div className="countdown">
                     <div className="counticon">
                        <i className="fa fa-file-text-o"></i>
                        <span className="counter-value" data-count="66">0</span>
                        <h3>DICTÁMENES</h3>
                     </div>
                  </div>
               </div>
               <div style={{ clear: 'both' }}></div>
            </div>
         </div>
      </section>
     {/*  <!-- counter section  END--> */}


     
      {/*     <!--Blog Section Start--> */} 
      <section id="blog_Sec" className="commonSection bgwhite">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center testcarHeadding">
                  <div className="themeHeadding black">
                     <h2>Últimas Noticias</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="singleBlog blogSec2">
                     <div className="blog_imag">
                        <img src="images/blog/single/1.jpg" alt=""/>
                     </div>
                     <div className="blog_cont">
                        <h2 className="blog_tit"><a href="blog_detailsleft.html">Your Title Here  </a></h2>
                        <div className="meta">
                           <a href="#">20 May 2018</a>,
                           <a href="#">Steer</a>
                        </div>
                        <p>
                           Your Title Here sit amet, consectetur adipisicing elit. Tempora facilis non unde molestiae impedit...
                        </p>
                        <a className="sbrm" href="blog_detailsleft.html">Read More<i className="fa fa-angle-double-right"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="singleBlog blogSec2">
                     <div className="blog_imag">
                        <img src="images/blog/single/2.jpg" alt=""/>
                     </div>
                     <div className="blog_cont">
                        <h2 className="blog_tit"><a href="blog_detailsleft.html">Your Title Here  </a></h2>
                        <div className="meta">
                           <a href="#">20 May 2018</a>,
                           <a href="#">Steer</a>
                        </div>
                        <p>
                           Your Title Here sit amet, consectetur adipisicing elit. Tempora facilis non unde molestiae impedit...
                        </p>
                        <a className="sbrm" href="blog_detailsleft.html">Read More<i className="fa fa-angle-double-right"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="singleBlog blogSec2">
                     <div className="blog_imag">
                        <img src="images/blog/single/3.jpg" alt=""/>
                     </div>
                     <div className="blog_cont">
                        <h2 className="blog_tit"><a href="blog_detailsright.html">Your Title Here </a></h2>
                        <div className="meta">
                           <a href="#">20 May 2018</a>,
                           <a href="#">Steer</a>
                        </div>
                        <p>
                           Your Title Here sit amet, consectetur adipisicing elit. Tempora facilis non unde molestiae impedit...
                        </p>
                        <a className="sbrm" href="blog_detailsright.html">Read More<i className="fa fa-angle-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     {/*  <!--Blog Section End-->*/}


      {/*<!--Partner Scrooll Carousel Start -->*/}
      <PartnerScrollCarousel/>
      {/*<!--Partner Scrooll Carousel End -->*/}

    </div>
  )
}

export default Home
