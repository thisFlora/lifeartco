import React from "react";
import "./styles.scss";

const CompanyElements = ({ element }) => {
  return (
    <div class="company-elemets-section">
      <div class="inner-container">
        <h1>{element.name}</h1>
        <img src="" alt="" />
        <p class="text">{element.description}</p>
      </div>
    </div>
  );
};

export default CompanyElements;
