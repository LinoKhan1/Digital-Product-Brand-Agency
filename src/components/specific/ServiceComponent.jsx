import React, { useState } from 'react';
//import PropTypes from 'prop-types';

// Images
import DesignImage from '../../assets/images/Design.JPG';
import BrandingImage from '../../assets/images/brand_identity.png';
import SEOImage from '../../assets/images/search.png';
import UXUIImage from '../../assets/images/user_experience.png';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const services = [

  { id: 1, name: 'Design', image: DesignImage },
  { id: 2, name: 'Branding', image: BrandingImage },
  { id: 3, name: 'SEO', image: SEOImage },
  { id: 4, name: 'UX/UI', image: UXUIImage },

];




const ServiceComponent = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    /** Service Component */
    <section className="service-section" id="service" data-testid="service-component">
      <div className="row">
        <div className="col">
          <div className="service-image">
            <img src={currentImage} alt="Linokhan Service" />
          </div>
        </div>
        <div className="col">
          <div className="service-list" data-testid="service-list">
            <h1>Everything your site needs for success</h1>
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
