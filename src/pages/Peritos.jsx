import { Link } from "react-router-dom"

function Peritos() {
  return (
    <div>

                            {/* Breadcrumb */}
<section className="breadcrumbSec">
  <div className="overlay"></div>
  <img
    src="/images/breadcum/peritos.jpeg"
    alt="breadcrumb background"
    className="breadcrumbImage"
  />
</section>


       {/*  <!--PERITOS PAGINA start--> */}
      <section className="blogSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="blogSidebar left">
              <aside className="widget search">
                <form action="#" method="post">
                  <input type="search" placeholder="Buscar..." />
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
              </aside>
              <aside className="widget">
                <h3 className="widgetTitle">Especialidades</h3>
                <ul className="widgetList">
                <li><Link to="/especialidad/1">Instalaciones eléctricas</Link></li>
                <li><Link to="/especialidad/2">Seguridad eléctrica y electrostática</Link></li>
                <li><Link to="/especialidad/3">Investigación de accidentes y siniestros</Link></li>
                <li><Link to="/especialidad/4">Recipientes sujetos a presión, generadores de vapor o calderas y recipientes criogénicos</Link></li>
                <li><Link to="/especialidad/5">Uso y aprovechamiento de gas natural / gas LP y biogases</Link></li>
                <li><span>Calidad y eficiencia energética, Código Red 2.0</span></li>
                <li><span>Sistemas fotovoltaicos</span></li>
                <li><span>Eficiencia hidráulica</span></li>
                <li><span>Áreas explosivas</span></li>
                <li><span>Sistemas contra incendio</span></li>
                <li><span>Telecomunicaciones</span></li>
                <li><span>Protección civil</span></li>
                <li><span>Data centers</span></li>
                <li><span>Termometría por radiación infrarroja</span></li>
                </ul>
              </aside>
              {/* <aside className="widget">
                <h3 className="widgetTitle">Recent Post</h3>
                <div className="recentPost">
                  <div className="singleRecPost">
                    <img src="images/blog/recentpost/1.jpg" alt="" />
                    <h2 className="recPostTitle"><a href="#">Working principle, do we work?</a></h2>
                    <div className="blogMeta">
                      <a href="#">December 06, 2018</a><span>/</span>
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                  <div className="singleRecPost">
                    <img src="images/blog/recentpost/2.jpg" alt="" />
                    <h2 className="recPostTitle"><a href="#">We're doing business with pleasure</a></h2>
                    <div className="blogMeta">
                      <a href="#">December 06, 2018</a><span>/</span>
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                  <div className="singleRecPost">
                    <img src="images/blog/recentpost/3.jpg" alt="" />
                    <h2 className="recPostTitle"><a href="#">Your ideas are very important to us</a></h2>
                    <div className="blogMeta">
                      <a href="#">December 06, 2018</a><span>/</span>
                      <a href="#">2 Comments</a>
                    </div>
                  </div>
                </div>
              </aside> */}
            </div>
          </div>

          <div className="col-lg-8">
            <div className="blogRightsidebar">
              <div className="singleBlogDetails">
                <div className="sblogImg">
                  <img src="images/blog/blogpage/1.jpg" alt="" />
                </div>
                <div className="sblogDec blogDetailsDec">
                  <h2 className="blogTitle"><a href="#">Fully Responsive Layout</a></h2>
                  <p>
                    Vivamus ultricies augue in neque efficitur, sed porta ipsum dapibus.
                    Cras nec volutpat nulla. In consequat, nisi eu porta laoreet, purus mauris dictum nisl,
                    sed auctor felis erat laoreet quam. Proin accumsan tempus erat, vitae tempor ex fermentum nec.
                    Mauris ex velit, commodo nec ligula quis, rutrum finibus urna. Pellentesque id mattis neque.
                    Pellentesque sit amet justo tellus. Suspendisse molestie eu tellus sit amet placerat.
                    Pellentesque tempus diam vel purus consequat feugiat.
                    vel laoreet risus eleifend. Morbi ut nunc quis odio euismod imperdiet sit amet et risus.
                  </p>
                  <blockquote>
                    <p>
                      “Vivamus ultricies augue in neque efficitur, sed porta ipsum dapibus.
                      Cras nec volutpat nulla. In consequat, nisi eu porta laoreet, purus mauris dictum nisl.”
                    </p>
                  </blockquote>
                  <p>
                    Praesent imperdiet diam sit amet massa sollicitudin tincidunt.
                    Donec ullamcorper sapien vel tortor facilisis accumsan id euismod libero.
                    Aliquam fringilla convallis venenatis. Suspendisse nec nunc diam. Integer in nunc imperdiet,
                    sollicitudin nibh quis, facilisis enim. In id bibendum quam, nec aliquam justo. Phasellus porta,
                    quam nec auctor facilisis, nisl quam mattis sapien, non commodo lectus elit et massa.
                  </p>
                </div>
              </div>

              <div className="socialShare">
                <p>December 06, 2018 / Business, Company</p>
                {/* <div className="shareSocial">
                  <span>Share :</span>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-pinterest-p"></i></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/*   <!--PERITOS PAGINA End--> */}



     {/* PERITOS Section */}

      <section className="commonSection bgwhite">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center testcarHeadding">
        <div className="themeHeadding black">
          <h2>PERITOS</h2>
        </div>
      </div>
    </div>
     {/* PERITO 1*/}
    <div className="row team-wrapper">
          <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
      <div className="imagenPerito">
        <figure>
          <img src="/images/peritos/foto1.jpeg" alt="" />
        </figure>
      </div>
      {/* <div className="perito-info">
        <h4 className="peritoTitle">Ing. Gustavo M. Espinosa Rütter</h4>
        <p className="peritoArea">Perito en Áreas Explosivas</p>
      </div> */}
    </div>


      {/* PERITO 2*/}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="imagenPerito">
          <figure>
            <img src="/images/peritos/foto2.jpg"  alt="" />
            {/* <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p> */}
          </figure>
        </div>
      {/*   <div className="team-info text-center">
          <h4 className="title">TITULO</h4>
          <p className="team_designation">AREA</p>
        </div> */}
      </div>

      {/* PERITO 3 */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="imagenPerito">
          <figure>
            <img src="/images/peritos/foto3.jpg"  alt="" />
            {/* <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p> */}
          </figure>
        </div>
       {/*  <div className="team-info text-center">
          <h4 className="title">TITULO</h4>
          <p className="team_designation">AREA</p>
        </div> */}
      </div>

      {/* PERITO 4 */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="imagenPerito">
          <figure>
            <img src="/images/peritos/foto4.jpg"  alt="" />
            {/* <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p> */}
          </figure>
        </div>
        {/* <div className="team-info text-center">
          <h4 className="title">TITULO</h4>
          <p className="team_designation">AREA</p>
        </div> */}
      </div>
     
    </div>
  </div>
</section>
{/* Team Section END */}



    </div>
  )
}

export default Peritos
