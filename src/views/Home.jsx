import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ImgCarousel from "../components/ImgCarousel";
import "../views/HomeStyles.css";

const Home = () => {
    return (
        <div className="main-container">
            <header className="banner">
                <Container fluid>
                    <Row className="align-items-center" style={{ height: "100%" }}>
                        <Col md={6} className="banner-text text-center text-light">
                            <h1>Bienvenido a Nuestra Cocina Restaurant</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Rem, laboriosam. Doloremque nesciunt eaque quaerat, voluptas
                                assumenda dolore nam eum! Ab incidunt perspiciatis voluptatum
                                optio vitae iusto minus aliquam commodi sapiente.
                            </p>
                        </Col>
                        <Col md={6} className="ImgCarousel-container mt-1">
                            <ImgCarousel />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
};

export default Home;

