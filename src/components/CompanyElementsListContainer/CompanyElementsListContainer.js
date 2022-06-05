import React, { useEffect, useState } from "react";
import CompanyElementsList from "../CompanyElementsList/CompanyElementsList";
import image1 from "../../assets/mision.jpg";
import image2 from "../../assets/vision.jpg";
import image3 from "../../assets/valores.jpg";
import "./CompanyElementsListContainer.scss";

const ElementsList = [
  {
    img: image1,
    name: "Misión",
    description:
      "Acompañar e impulsar la transformación hacia modelos organizativos que generen una cultura de bienestar, innovación y desarrollo, asegurando la sostenibilidad de las organizaciones.",
    className: "inner-container2",
  },
  {
    img: image2,
    name: "Visión",
    description:
      "Ser elegidos, reconocidos y compartidos gracias a nuestro modelo de consultoría empático, transformador y efectivo.",
    className: "inner-container3",
  },
  {
    img: image3,
    name: "Valores",
    description:
      "Apredizaje, Transformación y Armonía",
    className: "inner-container2",
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
    <div id={'company-elements'}>
      <div className="container2">
        <div className="row2">
          <CompanyElementsList elements={elements} />
        </div>
      </div>
    </div>
  );
};

export default CompanyElementsListContainer;
