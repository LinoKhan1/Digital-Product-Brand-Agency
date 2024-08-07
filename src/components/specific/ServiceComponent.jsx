import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
//import PropTypes from 'prop-types';

// Images
import DesignImage from '../../assets/images/Design.webp';
import BrandingImage from '../../assets/images/brand_identity.webp';
import SEOImage from '../../assets/images/search.webp';
import UXUIImage from '../../assets/images/user_experience.webp';

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const services = [

  { id: 1, name: 'Web Design and Development', image: DesignImage },
  { id: 2, name: 'Brand Design', image: BrandingImage },
  { id: 3, name: 'SEO', image: SEOImage },
  { id: 4, name: 'User Experience and Interface Optimization', image: UXUIImage },

];




const ServiceComponent = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    /** Service Component */
    <section className="service-section" id="service" data-testid="service-component" data-aos="fade-up">
      <div className="row">
        <div className="col">
          <div className="service-image">
            <LazyLoad height={200}>
              <img src={currentImage} alt="Service of Linokhan" />
            </LazyLoad>
          </div>
        </div>
        <div className="col">
          <div className="service-list" data-testid="service-list">
            <h1>Services that drives sucess!</h1>
            <ul>
              {services.map(service => (
                <li key={service.id} onMouseEnter={() => handleMouseEnter(service.image)}>
                  <span><FontAwesomeIcon className="check" icon={faCheckCircle} /></span>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Structured Data */}
      {/*<script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Service",
          "serviceType": "${services.name}",
          "description": "${services.description}",
          "provider": {
            "@type": "Organization",
            "name": "Linokhan",
            "url": "https://www.linokhan.com"
          },
          "image": "${services.image}"
        }
        `}
      </script>*/}
    </section>
  );
};

/*ServiceComponent.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};*/

export default ServiceComponent;
