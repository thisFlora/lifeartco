import React from "react";
import Button from "../Button/Button";
import CardListContainer from "../CardListContainer/CardListContainer";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <div className="inner-container">
          <h1>Sobre Nosotros</h1>
          <p>
            Somos un equipo creativo e interdisciplinario que orienta sus recursos al agregado de valor desde el abordaje holístico a personas, equipos y organizaciones. Brindamos servicios de coaching y consultoría que elevan el nivel de nuestros clientes en aspectos vitales como el liderazgo, la comunicación y la inteligencia emocional, entre otros
          </p>
          <Button
            onClick={() => {
              alert("Me clickeaste!");
            }}
          >
            ¡Conocenos un poco más!
          </Button>
        </div>
      </div>
      <div className="what-we-do-section">
        <h1>Nuestros Servicios</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit ducimus, enim inventore earum, eligendi nostrum pariatur
          necessitatibus eius dicta a voluptates sit deleniti autem error eos
          totam nisi neque voluptates sit deleniti autem error eos totam nisi
          neque.
        </p>
      </div>
      <CardListContainer />
    </>
  );
};

export default AboutUs;
