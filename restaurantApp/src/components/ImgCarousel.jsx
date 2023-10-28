import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ImgCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-img img-fluid" // Aplicamos la clase img-fluid aquí
              src="https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Primer slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Gastronomia</h3>
            <p>Ingredientes frescos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-img img-fluid" // Aplicamos la clase img-fluid aquí
              src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Segundo slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Gastronomia</h3>
            <p>Cocina de autor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-img img-fluid" // Aplicamos la clase img-fluid aquí
              src="https://images.unsplash.com/photo-1624904025431-d905ca1ba91e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tercer slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Gastronomia</h3>
            <p>Delicias de nuestra cocina</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
