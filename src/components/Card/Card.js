import React from "react";
import "./Card.scss";

const Card = ({ service }) => {
  return (
    <div className="card2">
      <div className="card-header">
        <div className="card-icons">
          {service.logo}
        </div>
        <h2 className="titulo">{service.name}</h2>
      </div>
      <div className="card-body">
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Card;
