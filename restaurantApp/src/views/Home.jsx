// Home.js
import React from "react";
import ImgCarousel from "../components/ImgCarousel";
import "./Home.css";

const Home = () => {
    return (
        <header>
            <div className="banner">
                <div className="banner-text my-auto">
                    <h1>Bienvenido a Nuestra Cocina Restaurant</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Rem, laboriosam. Doloremque nesciunt eaque quaerat, voluptas
                        assumenda dolore nam eum! Ab incidunt perspiciatis voluptatum
                        optio vitae iusto minus aliquam commodi sapiente.
                    </p>
                </div>
                <div className="carousel my-1">
                    <ImgCarousel/>
                </div>
            </div>
        </header>
    );
};

export default Home;
