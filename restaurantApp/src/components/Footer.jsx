import React from "react";
import '../components/Footer.css'

const Footer = () => {
    return (
        <footer className="main__card mt-2" id="footer">
            <div className="f__container">
                <div className="footer__title">
                    <p>
                        ¿Preguntas? Llama al <span>800 9000</span>
                    </p>
                </div>
                <div className="info__container">
                    <ul>
                        <li>
                            <a href="#footer">Prensa</a>
                        </li>
                        <li>
                            <a href="#footer">Canjear tarjetas de regalo</a>
                        </li>
                        <li>
                            <a href="#footer">Privacidad</a>
                        </li>
                        <li>
                            <a href="#footer">Contáctanos</a>
                        </li>
                        <li>
                            <a href="#footer">Centro de ayuda</a>
                        </li>
                        <li>
                            <a href="#footer">Relaciones con inversionistas</a>
                        </li>
                        <li>
                            <a href="#footer">Formas de pago</a>
                        </li>
                        <li>
                            <a href="#footer">Preferencias de cookies</a>
                        </li>
                        <li>
                            <a href="#footer">Cuenta</a>
                        </li>
                        <li>
                            <a href="#footer">Empleo</a>
                        </li>
                        <li>
                            <a href="#footer">Términos de uso</a>
                        </li>
                        <li>
                            <a href="#footer">Información corporativa</a>
                        </li>
                        <li>
                            <a href="#footer">Avisos legales</a>
                        </li>
                    </ul>
                </div>
                <div className="social__media">
                    <i className="fa-brands fa-facebook-f" style={{ color: "#000000" }}></i>
                    <i className="fa-brands fa-instagram" style={{ color: "#000000" }}></i>
                    <i className="fa-brands fa-twitter" style={{ color: "#000000" }}></i>
                </div>
                <div className="line"></div>
                <div>
                    <p className="rights__2023">
                        © 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
