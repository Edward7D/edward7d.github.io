

function About() {
  return (
    <div>


<section className="breadcrumbSec">
  <div className="overlay"></div>
  <img
    src="/images/breadcum/nosotros.jpeg"
    alt="breadcrumb background"
    className="breadcrumbImage"
  />
</section>


      {/* About Us Section */}
      <section id="about_sec" className="commonSection aboutCont">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutcontain">
                <div className="themeHeadding black">
                  <h2>We Are “Steer”</h2>
                </div>
                <p>
                  Here are many variations of passages of Contrary to popular belief available,
                  but the majority have suffered alteration in some form, by injected humour.
                </p>
                <p>
                  But I must explain to you how all this mistaken pleasure and praising pain was born
                  and I will give you a complete account of the system, the master-builder of human happiness.
                </p>
                <button className="themeBtn">Read More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutimg">
                <img src="images/about/a11.jpg" alt="About Steer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="commonSection promo_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 noPadding text-center">
              <div className="themeHeadding">
                <h2>We are trusted partner</h2>
                <p>
                  Sed ultrices porta cursus. Aenean nec sagittis augue. Integer fringilla nunc non leo blandit efficitur.
                  Aenean vel sodales felis. Nunc ac dignissim nunc. Aenean vel pellentesque lectus.
                  Fusce nibh orci, porttitor nec odio sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}

      <section className="commonSection bgwhite">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center testcarHeadding">
        <div className="themeHeadding black">
          <h2>Consejo Directivo</h2>
        </div>
      </div>
    </div>

    <div className="row team-wrapper">
      {/* Ing. Juan Erasmo Cuaya Granados - Presidente */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="teamImg">
          <figure>
            <img src="/images/team/perfil1.png" alt="Juan Erasmo Cuaya Granados" />
            <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p>
          </figure>
        </div>
        <div className="team-info text-center">
          <h4 className="title">Ing. Juan Erasmo Cuaya Granados</h4>
          <p className="team_designation">Presidente</p>
        </div>
      </div>

      {/* Ing. José Luis González Coronel - Vicepresidente */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="teamImg">
          <figure>
            <img src = "/images/team/perfil5.png" alt="José Luis González Coronel" />
            <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p>
          </figure>
        </div>
        <div className="team-info text-center">
          <h4 className="title">Ing. José Luis González Coronel</h4>
          <p className="team_designation">Vicepresidente</p>
        </div>
      </div>

      {/* Ing. Paola Silva Viveros - Secretaria General */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="teamImg">
          <figure>
            <img src="/images/team/perfil2.png"  alt="Paola Silva Viveros" />
            <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p>
          </figure>
        </div>
        <div className="team-info text-center">
          <h4 className="title">Ing. Paola Silva Viveros</h4>
          <p className="team_designation">Secretaria General</p>
        </div>
      </div>

      {/* Ing. David Ulises Hernández Carballo - Tesorero */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="teamImg">
          <figure>
            <img src="/images/team/perfil4.png"  alt="David Ulises Hernández Carballo" />
            <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p>
          </figure>
        </div>
        <div className="team-info text-center">
          <h4 className="title">Ing. David Ulises Hernández Carballo</h4>
          <p className="team_designation">Tesorero</p>
        </div>
      </div>

      {/* Ing. Rubén Rivera García - Director */}
      <div className="col-md-2 col-sm-4 col-xs-6 team_sect">
        <div className="teamImg">
          <figure>
            <img src="/images/team/perfil3.png"  alt="Rubén Rivera García" />
            <p className="team-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:info@example.com"><i className="fa fa-envelope"></i></a>
            </p>
          </figure>
        </div>
        <div className="team-info text-center">
          <h4 className="title">Ing. Rubén Rivera García</h4>
          <p className="team_designation">Director</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Team Section END */}
    </div>
  )
}

export default About
