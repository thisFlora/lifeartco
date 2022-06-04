import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logoLifeArtCo from "../../assets/logo-life-art-co.png"
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <img
            src={logoLifeArtCo}
            className="footer-logo"
            alt="Logo Life Art Co."
            title="Life Art Co."
            loading="lazy"
          />
        </div>
        <div className="footer-items">
          <h3>Menú</h3>
          <div className="border1"></div>
          <div className="footer-list">
            <ul>
              <a href="#">
                <li>Inicio</li>
              </a>
              <a href="#">
                <li>Sobre Nosotros</li>
              </a>
              <a href="#">
                <li>Nuestros Servicios</li>
              </a>
              <a href="#">
                <li>Contacto</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-items">
          <h3>Contacto</h3>
          <div className="border1"></div>
          <div className="footer-list">
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faLocationDot} />
                </i>
                Córdoba, Argentina
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                351 5100546
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                lifeartconsultores@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-items">
          <h3>Redes Sociales</h3>
          <div className="border1"></div>
          <div className="social-media">
            <a href="https://www.instagram.com/lifeart.co/?hl=es-la" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/LifeArtCOrdoba/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/company/81328353/admin/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        2022 &copy; Life Art Co. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
