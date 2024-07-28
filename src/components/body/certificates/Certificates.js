import Carousel from './carousel/Carousel';
import { certificates } from 'data/certificates';
import './Certificates.css';

const Certificates = () => (
  <div className="certificates">
    <label className="section-title">
      <i className="fi fi-rr-badge option-icon icon-fix-left-margin"></i>
      Certificates
    </label>

    <div className="certificates-carousel">
      <Carousel carouselName="certificates-carousel" images={certificates} />
    </div>
  </div>
);

export default Certificates;
