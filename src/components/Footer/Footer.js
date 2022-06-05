import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logoLifeArtCo from "../../assets/logo-footer.png"
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
              <Link to="/">
                <li>Inicio</li>
              </Link>
              <Link to="/">
                <li>Sobre Nosotros</li>
              </Link>
              <Link to="/">
                <li>Nuestros Servicios</li>
              </Link>
              <Link to="/">
                <li>Contacto</li>
              </Link>
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
            <Link to="www.instagram.com/lifeart.co/?hl=es-la">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://www.facebook.com/LifeArtCOrdoba/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="https://www.linkedin.com/company/81328353/admin/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
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
