import React, { useEffect, useState } from "react";
import CompanyElementsList from "../CompanyElementsList/CompanyElementsList";
import image1 from "../../images/Mision.jpg";
import image2 from "../../images/Vision.jpg";
import image3 from "../../images/Valores.jpg";
import "./CompanyElementsListContainer.scss";

const ElementsList = [
  {
    img: image1,
    name: "Misión",
    description:
      "Acompañar e impulsar la transformación hacia modelos organizativos que generen una cultura de bienestar, innovación y desarrollo, asegurando la sostenibilidad de las organizaciones.",
  },
  {
    img: image2,
    name: "Visión",
    description:
      "Ser elegidos, reconocidos y compartidos gracias a nuestro modelo de consultoría empático, transformador y efectivo.",
  },
  {
    img: image3,
    name: "Valores",
    description:
      "Apredizaje, Transformación y Armonía",
  },
];

const CompanyElementsListContainer = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const getElements = new Promise((res, rej) => {
      setTimeout(() => {
        res(ElementsList);
      }, 2000);
    });

    getElements.then((data) => {
      setElements(data);
    });
  }, []);

  return (
    <div className="container2">
      <div className="row2">
        <CompanyElementsList elements={elements} />
      </div>
    </div>
  );
};

export default CompanyElementsListContainer;
