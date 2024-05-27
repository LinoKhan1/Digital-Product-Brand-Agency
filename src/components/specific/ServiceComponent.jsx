import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Images
import DesignImage from '../../assets/images/Design.JPG';
import BrandingImage from '../../assets/images/brand_identity.png';
import SEOImage from '../../assets/images/search.png';
import UXUIImage from '../../assets/images/user_experience.png';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ServiceComponent = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    /** Service Component */
    <section className="service-section" id="service">
      <div className="row">
        <div className="col">
          <div className="service-image">
            <img src={currentImage} alt="Service Image" />
          </div>
        </div>
        <div className="col">
          <div className="service-list">
            <h2>Everything your site needs for success</h2>
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

ServiceSection.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default ServiceComponent;
