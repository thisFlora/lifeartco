import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";

const Footer = () => {
    return (
        <div class="footer">
            <div class="inner-footer">
                <div class="footer-items">
                    <img
                        src="https://i.ibb.co/KqB6ptv/Logotipo-Life-Art-Co-5.png"
                        class="footer-logo"
                        alt="Logo Life Art Co."
                        title="Life Art Co."
                        loading="lazy"
                    />
                    <p>Impulsamos Desarrollo Humano</p>
                </div>
                <div class="footer-items">
                    <h3>Menú</h3>
                    <div class="border1"></div>
                    <ul>
                        <a href="#">
                            <li>Inicio</li>
                        </a>
                        <a href="#">
                            <li>Nosotros</li>
                        </a>
                        <a href="#">
                            <li>Que Hacemos</li>
                        </a>
                        <a href="#">
                            <li>Contacto</li>
                        </a>
                    </ul>
                </div>
                <div class="footer-items">
                    <h3>Contacto</h3>
                    <div class="border1"></div>
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
                <div class="footer-items">
                    <h3>Redes Sociales</h3>
                    <div class="border1"></div>
                    <div class="social-media">
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                2022 &copy; Life Art Co. Todos los derechos reservados.
            </div>
        </div>
    );
};

export default Footer;