import React, { useState } from 'react';

const Comisiones = () => {
  const [currentGroup, setCurrentGroup] = useState(0);


  const styles = {
    dotsContainer: {
      textAlign: 'center',
      marginTop: '20px',
    },
    dot: {
      display: 'inline-block',
      width: '12px',
      height: '12px',
      margin: '0 6px',
      backgroundColor: '#ccc',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    dotActive: {
      backgroundColor: '#000',
    },
    hiddenGroup: {
      display: 'none',
    },
    visibleGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    teamSect: {
    margin: '5px',
    backgroundColor: '#f5f5f5', 
   },
    teamDesignation: {
      fontSize: '17px',
      lineHeight: '1.2',
      textAlign: 'center',
    },
    title: {
      fontSize: '16px',
      lineHeight: '1.2',
      textAlign: 'center',
      wordWrap: 'break-word',
    },
    teamInfo: {
    marginTop: '10px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'center'
    }
  };

  return (
    <section className="commonSection bgwhite">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center testcarHeadding">
            <div className="themeHeadding black">
              <h2>Comité Directivo y Comisiones</h2>
            </div>
          </div>
        </div>

        {/* Grupo 1 */}
        <div className="row team-wrapper" style={currentGroup === 0 ? styles.visibleGroup : styles.hiddenGroup}>
          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Juan Erasmo Cuaya Granados</h4>
              <p className="team_designation" style={styles.teamDesignation}>Presidente</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. José Luis González Coronel</h4>
              <p className="team_designation" style={styles.teamDesignation}>Vicepresidente</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Paola Silva Viveros</h4>
              <p className="team_designation" style={styles.teamDesignation}>Secretaria General</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. David Ulises Hernández Carballo</h4>
              <p className="team_designation" style={styles.teamDesignation}>Tesorero</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Rubén Rivera García</h4>
              <p className="team_designation" style={styles.teamDesignation}>Director</p>
            </div>
          </div>


        </div>

        {/* Grupo 2 */}
        <div className="row team-wrapper" style={currentGroup === 1 ? styles.visibleGroup : styles.hiddenGroup}>
         
         <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
               <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Mario Alberto Valverde Díaz </h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Instalaciones Eléctricas</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Jesus Botello Torres</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Seguridad Eléctrica y Electroestática</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. Gustavo Manuel Espinosa Rütter</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Gas Natural, Gas LP y Biogases</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing.Miguel Temelo Ledezma</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Calidad y Eficiencia Energética, Código de Red 2.0</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. José López Chávez</h4>
             <p className="team_designation" style={styles.teamDesignation}>Comisión Sistemas Fotovoltaicos</p>
            </div>
          </div>


        </div>

        {/* Grupo 3 */}
        <div className="row team-wrapper" style={currentGroup === 2 ? styles.visibleGroup : styles.hiddenGroup}>
        
        <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
             <h4 className="title" style={styles.title}>Ing.Rubén Negrete Urban</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Eficiencia Hidráulica</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
               <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing.Angel H. González Ortega</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Sistemas Contraincendio</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
              <h4 className="title" style={styles.title}>Ing. José Luis González Coronel</h4>
              <p className="team_designation" style={styles.teamDesignation}>Comisión Protección Civil</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
               <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
             <h4 className="title" style={styles.title}>Ing. José Gpe. González García</h4>
             <p className="team_designation" style={styles.teamDesignation}>Comisión Data Center</p>
            </div>
          </div>

          <div className="team_sect" style={styles.teamSect}>
            <div className="teamImg">
              <figure>
                <img src="/images/team/team2.jpg" alt="team_img" />
                <p className="team-social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="mailto:info@gmail.com"><i className="fa fa-envelope"></i></a>
                </p>
              </figure>
            </div>
            <div className="team-info" style={styles.teamInfo}>
             <h4 className="title" style={styles.title}>Ing. Rubén Rivera García</h4>
             <p className="team_designation" style={styles.teamDesignation}>Comisión Telecomunicaciones</p>
            </div>
          </div>



        </div>

        {/* Navegación por puntos */}
        <div style={styles.dotsContainer}>
          <span
            style={{ ...styles.dot, ...(currentGroup === 0 ? styles.dotActive : {}) }}
            onClick={() => setCurrentGroup(0)}
          />
          <span
            style={{ ...styles.dot, ...(currentGroup === 1 ? styles.dotActive : {}) }}
            onClick={() => setCurrentGroup(1)}
          />
          <span
            style={{ ...styles.dot, ...(currentGroup === 2 ? styles.dotActive : {}) }}
            onClick={() => setCurrentGroup(2)}
          />
        </div>
      </div>
    </section>
  );
};

export default Comisiones;
