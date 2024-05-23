import React, { useState } from 'react';
import '../../pages/Home/Home.scss';
import test1 from '../../assets/images/Design.JPG';
import test2 from '../../assets/images/Branding.JPG';
import test3 from '../../assets/images/SEO.jpg';
import test4 from '../../assets/images/uxuis.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Sample service data
const services = [
  { id: 1, name: 'Web Design', image: test1 },
  { id: 2, name: 'Development', image: test2 },
  { id: 3, name: 'SEO', image: test3 },
  { id: 4, name: 'Branding', image: test4 },
  // Add more services as needed
];

const ServiceSection = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="service-section">

      <div className="row">
        <div className="col">

          <div className="service-image">
            <img src={currentImage} alt="Service" />
          </div>
        </div>
        <div className="col">
          <div className="service-list">
            <h1>Everything your site needs for success</h1>

            <ul>
              {services.map(service => (

                <li key={service.id} onMouseEnter={() => handleMouseEnter(service.image)}>
                  {/*<img src={service.image} alt={service.name} className="service-thumbnail" />*/}
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
