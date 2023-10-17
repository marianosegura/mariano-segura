import React from 'react';
import Carousel from 'components/common/carousel/Carousel';
import './Certificates.css';
import { certificates } from 'data/certificates';

const Certificates = () => (
  <div className="certificates">
    <label className="section-title">
      <i className="fi fi-rr-badge option-icon"></i>
      Certificates
    </label>

    <div className="certificates-carousel">
      <Carousel carouselName="certificates-carousel" images={certificates} />
    </div>
  </div>
);

export default Certificates;
