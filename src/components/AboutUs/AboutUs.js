import React from "react";
import Button from "../Button/Button";
import CardListContainer from "../CardListContainer/CardListContainer";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <div id={'aboutus'}>
        <div className="about-section">
          <div className="inner-container">
            <h1>Sobre Nosotros</h1>
            <p>
              Somos un equipo creativo e interdisciplinario que orienta sus recursos al agregado de valor desde el abordaje holístico a personas, equipos y organizaciones. Brindamos servicios de coaching y consultoría que elevan el nivel de nuestros clientes en aspectos vitales como el liderazgo, la comunicación y la inteligencia emocional, entre otros
            </p>
            <Button
              onClick={() => window.location.replace("/#company-elements")}
            >
              ¡Conocenos un poco más!
            </Button>
          </div>
        </div>
      </div>
      <div className="what-we-do-section">
        <div id={'services'}>
        <h1>Nuestros Servicios</h1>
        <p className="text-center">
          Ofrecemos a nuestros clientes un servicio personalizado y de excelencia, apoyado en nuestra experiencia y capacidad técnica adquirida.
        </p>
      </div>
      <CardListContainer />
      </div>
    </>
  );
};

export default AboutUs;
