/* import './PartnerScrollCarousel.css'; */

const clientLogos = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
];

const PartnerScrollCarousel = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="partner-carousel-section">
      <div className="carousel-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="carousel-logo">
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerScrollCarousel;
