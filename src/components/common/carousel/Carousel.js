import React from 'react';
import './Carousel.css';

const Carousel = ({ images, carouselName }) => (
  <div className="custom-carousel">
    <div id={carouselName} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image.name}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img src={image.file} className="d-block w-100" alt={image.name} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselName}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselName}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  </div>
);

export default Carousel;
