import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImgCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* Espacio para tu imagen */}
        <img src="https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Primer slide" />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>Descripción de la primera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Espacio para tu segunda imagen */}
        <img src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Segundo slide" />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Descripción de la segunda imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Espacio para tu tercera imagen */}
        <img src="https://images.unsplash.com/photo-1624904025431-d905ca1ba91e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tercer slide" />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>Descripción de la tercera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;
