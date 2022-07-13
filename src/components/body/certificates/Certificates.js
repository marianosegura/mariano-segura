import React from 'react';
import Carousel from '../../common/carousel/Carousel';
import './Certificates.css';

const images = [
  {
    name: "Microservices with Node JS and React - Stephen Grider.jpg",
    file: require('../../../assets/certificates/Microservices with Node JS and React - Stephen Grider.jpg')
  },
  {
    name: "Microservices Architecture and Implementation on .NET 5 - Mehmet Ozkaya.jpg",
    file: require('../../../assets/certificates/Microservices Architecture and Implementation on .NET 5 - Mehmet Ozkaya.jpg')
  },
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
  },
  {
    name: "Scrum Fundamentals Certified.jpg",
    file: require('../../../assets/certificates/Scrum Fundamentals Certified.jpg')
  },
  {
    name: "Introduction to Git - DataCamp.jpg",
    file: require('../../../assets/certificates/Introduction to Git - DataCamp.jpg')
  },
  {
    name: "Introduction to Shell - DataCamp.png",
    file: require('../../../assets/certificates/Introduction to Shell - DataCamp.jpg')
  },
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
