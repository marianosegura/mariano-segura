import React from 'react';
import Carousel from '../../common/carousel/Carousel';
import './Certificates.css';

const images = [
  {
    name: "The Modern React Bootcamp - Colt Steele.png",
    file: require('../../../assets/certificates/The Modern React Bootcamp - Colt Steele.png')
  },
  {
    name: "Angular The Complete Guide 2022 - Maximilian Schwarzmüller.png",
    file: require('../../../assets/certificates/Angular The Complete Guide 2022 - Maximilian Schwarzmüller.png')
  },
  {
    name: "Complete guide to building an app with Net Core and React - Neil Cummings.png",
    file: require('../../../assets/certificates/Complete guide to building an app with Net Core and React - Neil Cummings.png')
  },
  {
    name: "The Web Developer Bootcamp 2022 - Colt Steele.png",
    file: require('../../../assets/certificates/The Web Developer Bootcamp 2022 - Colt Steele.png')
  }
];

function Certificates() {
  return (
    <div className='certificates'>
      <label className='section-title'>
        <i className="fi fi-rr-badge option-icon"></i>
        Certificates
      </label>

      <div className='certificates-carousel'>
        <Carousel carouselName='certificates-carousel' images={images} />
      </div>
    </div>
  )
}

export default Certificates
