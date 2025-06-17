

function Proyectos() {
  return (
    <div>


      

                      {/* Breadcrumb */}
<section className="breadcrumbSec">
  <div className="overlay"></div>
  <img
    src="/images/breadcum/proyectos.jpeg"
    alt="breadcrumb background"
    className="breadcrumbImage"
  />
  {/* <div className="container">
    <div className="row">
      <div className="col-xs-12 text-center breadsec">
        <h1 className="breadTitle">PROYECTOS</h1>
      </div>
    </div>
  </div> */}
</section>


      <section className="projectSingleSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="singleProCaro">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active">
                      <img src="images/project/1.jpg" alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="1">
                      <img src="images/project/2.jpg" alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="2">
                      <img src="images/project/3.jpg" alt="" />
                    </li>
                    <li data-target="#myCarousel" data-slide-to="3" className="noMarginRight">
                      <img src="images/project/4.jpg" alt="" />
                    </li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <img src="images/project/1.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="images/project/2.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="images/project/3.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="images/project/4.jpg" alt="" />
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
                <h2 className="proDetaTitle">Mas Project Details</h2>
                <p>
                  It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions.
                </p>
                <p>
                  "But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness. No one
                  rejects, dislikes, or avoids pleasure itself, because it is
                  pleasure, but because those who do not know how to pursue pleasure
                  rationally encounter consequences that are extremely painful. Nor
                  again is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain.
                </p>
                <p>
                  the master-builder of human happiness. No one rejects, dislikes, or
                  avoids pleasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter consequences
                  that are extremely painful. Nor again is there anyone who loves or
                  pursues or desires to obtain pain of itself, because it is pain, quis
                  varius est elementum a. Aenean congue rhoncus mi, ut bibendum risus
                  suscipit eu. Curabitur non interdum ligula. Nulla facilisi.
                </p>
                <p>
                  "But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness. No one
                  rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                  but because those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again is there
                  anyone who loves or pursues or desires to obtain pain of itself,
                  because it is pain, but because occasionally circumstances occur in
                  which toil and pain can procure him some great pleasure.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="projectSingleInfo">
                <h2 className="projectSininTitle">Project Info</h2>
                <ul>
                  <li>
                    <span>Create Date:</span> March 2018
                  </li>
                  <li>
                    <span>Location:</span> Paris, France
                  </li>
                  <li>
                    <span>Value:</span> $270,000
                  </li>
                  <li>
                    <span>Category:</span> Wordpress
                  </li>
                </ul>
              </div>
              <div className="projectSingleText">
                <h2 className="projectSininTitle two">Project Details</h2>
                <p>
                  On the other hand, we denounce with righteous indignation and dislike
                  men who are so beguiled and demoralized by the charms of pleasure of
                  the moment, so blinded by desire, that they cannot foresee the pain
                  and trouble that are bound to ensue; and equal blame belongs to those
                  who fail in their duty through weakness of will, which is the same as
                  saying through shrinking from toil and pain. These cases are perfectly
                  simple and easy to distinguish,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}

export default Proyectos
