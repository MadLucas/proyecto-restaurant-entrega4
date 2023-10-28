import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer  class="small bg-light fixed-bottom">
        <div class="container py-3 py-sm-5">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <h6>Nosotros</h6>
              <ul class="list-unstyled">
                <li>Bienvenidos a Restaurant</li>
                <li>Mi Cocina</li>
                <li>Servicio de Primer Nivel</li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <h6>Información</h6>
              <ul class="list-unstyled">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo et nesciunt placeat adipisci debitis odio quibusdam ad sint, praesentium sapiente rerum id iure, dolor tempora hic quisquam, non maxime.</li>
              
              </ul>
            </div>

            <div class="col-12 col-sm-6 col-md-3">
              <address>
                <strong>Contacto</strong><br />
                Lorem ipsum dolor sit amet<br />
                Jhansi, Uttar Pradesh<br />
                <abbr title="Telephone">T:</abbr
                ><a href="tel:+919876543210">99999999</a><br />
                <abbr title="Mail">M:</abbr
                ><a href="mailto:info@domain.com">info@domain.com</a>
              </address>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-9">
              <ul class="list-inline">
                <li class="list-inline-item">&copy; 2023 Todos los derechos Reservados -</li>
                <li class="list-inline-item">Esta es una página ficticia con fines academicos.</li>
                <li class="list-inline-item">
                </li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="dropdown dropup p-0">
               
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a href="#" class="dropdown-item">www.otherwebsite.com</a>
                  <a href="#" class="dropdown-item">www.newwebsite.com</a>
                  <a href="#" class="dropdown-item">www.oldwebsite.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;