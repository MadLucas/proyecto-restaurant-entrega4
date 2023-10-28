import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImgCarousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-img" src="https://funcionactiva.com/imagenes/Tipos-de-cocineros-1024x671.jpg" alt="Primer slide" />
        </div>
        <Carousel.Caption>
          <h3>Mi Cocina Restaurant</h3>
          <p>Ingredientes frescos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-img" src="https://www.eltiempo.com/files/image_1200_680/uploads/2022/11/11/636ec9b036dfd.png" alt="Segundo slide" />
        </div>
        <Carousel.Caption>
          <h3>Gastronomia</h3>
          <p>Cocina de autor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-img" src="https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/12/27165744/exterior-grillao-chamberi-1-1024x683.jpg" alt="Tercer slide" />
        </div>
        <Carousel.Caption>
          <h3>Gastronomia</h3>
          <p>Delicias de nuestra cocina</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel2;