import React, from 'react';
import ImgCarousel2 from "../components/ImgCarousel2";
import "./Nosotros.css";
// import { collection, getDocs } from 'firebase/firestore';
// import { CardGroup, Card } from 'react-bootstrap';

const Nosotros = () => {
    return (
        <header>
            <div className="banner">
                <div className="banner-text my-auto">
                    <h1>Nosotros</h1>
                    <p>
                        
"Mi Cocina" es un acogedor restaurante ubicado en el pueblo de San Miguelito, conocido por servir comida casera deliciosa y reconfortante. El restaurante es propiedad de Don Fernando, un apasionado chef que ha perfeccionado recetas transmitidas de generación en generación en su familia. El menú ofrece platos tradicionales, como tamales, pozole, mole poblano y chiles en nogada. "Mi Cocina" se convierte en un punto de encuentro para la comunidad, y una joven llamada Ana se convierte en una cliente regular. Cuando Don Fernando decide retirarse, Ana asume la responsabilidad de dirigir el restaurante y continuar su legado culinario. A lo largo de los años, Ana mantiene viva la tradición de "Mi Cocina" y asegura que la comunidad siga disfrutando de la auténtica comida casera. El restaurante se convierte en un lugar especial donde las generaciones se reúnen para compartir comidas, risas y recuerdos, y donde las recetas tradicionales siguen siendo el alma de la comida casera en San Miguelito.
                    </p>
                </div>
                <div className="carousel my-1">
                    <ImgCarousel2/>
                </div>
            </div>
        </header>
    );
};

export default Nosotros;