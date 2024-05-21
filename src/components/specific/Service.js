import React, { useState } from 'react';
import '../../pages/Home/Home.scss';
import test1 from '../../assets/images/test1.jpg';
import test2 from '../../assets/images/test2.jpg';
import test3 from '../../assets/images/test3.jpg';
import test4 from '../../assets/images/test4.jpg';

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
      <div className="service-image">
        <img src={currentImage} alt="Service" />
      </div>
      <div className="service-list">
        <ul>
          {services.map(service => (
            <li key={service.id} onMouseEnter={() => handleMouseEnter(service.image)}>
              {/*<img src={service.image} alt={service.name} className="service-thumbnail" />*/}
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
