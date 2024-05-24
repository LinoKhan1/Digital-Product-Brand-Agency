import React, { useState } from 'react';
import '../../pages/Home/Home.scss';
import Design_img from '../../assets/images/Design.JPG';
import Branding_img from '../../assets/images/brand_identity.png';
import SEO_img from '../../assets/images/search.png';
import UXUI_img from '../../assets/images/user_experience.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Sample service data
const services = [
  { id: 1, name: 'Brand and Identity Design', image: Branding_img },
  { id: 2, name: 'Web Design & Development', image: Design_img },
  { id: 3, name: 'User Experience & Interface Design', image: UXUI_img },
  { id: 4, name: 'Search Engine Optimization SEOs', image: SEO_img },
  // Add more services as needed
];

const ServiceSection = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="service-section" id="service">

      <div className="row">
        <div className="col">

          <div className="service-image">
            <img src={currentImage} alt="Service_image" />
          </div>
        </div>
        <div className="col">
          <div className="service-list">
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


    </div>
  );
};

export default ServiceSection;
