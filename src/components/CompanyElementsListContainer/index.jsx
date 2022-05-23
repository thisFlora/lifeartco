import React, { useEffect, useState } from "react";
import CompanyElementsList from "../CompanyElementsList";
import "./styles.css";

const ElementsList = [
  {
    img: "",
    name: "Misión",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    img: "",
    name: "Visión",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    img: "",
    name: "Valores",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
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
    <div class="body container">
      <div class="row">
        <CompanyElementsList elements={elements} />
      </div>
    </div>
  );
};

export default CompanyElementsListContainer;
