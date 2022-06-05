import React from "react";
import "./CompanyElements.scss";

const CompanyElements = ({ element }) => {
  const comparacion = "inner-container2";

  if (element.className === comparacion) {
    return (
      <div className="grid">
        <div className={element.className}>
          <h1>{element.name}</h1>
          <p>{element.description}</p>
        </div>
        <div>
          <img className="company-elemets-img" src={element.img} alt={element.name} title={element.name} loading='lazy'></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid">
        <div>
          <img className="company-elemets-img" src={element.img} alt={element.name} title={element.name} loading='lazy'></img>
        </div>
        <div className={element.className}>
          <h1>{element.name}</h1>
          <p>{element.description}</p>
        </div>
      </div>
    );
  }

};

export default CompanyElements;