import React from "react";
import "./CompanyElements.scss";

const CompanyElements = ({ element }) => {
  return (
    <div className="grid">
      <div className="inner-container2">
        <h1>{element.name}</h1>
        <p className="text">{element.description}</p>
      </div>
      <div>
        <img className="company-elemets-img" src={element.img} alt={element.name} title={element.name} loading='lazy'></img>
      </div>
    </div>
  );
};

export default CompanyElements;
