import React from "react";
import Card from "../Card/Card";

const CardList = ({ services }) => {
  return (
    <>
      {services.map((service) => (
        <Card key={service.name} service={service} />
      ))}
    </>
  );
};

export default CardList;
