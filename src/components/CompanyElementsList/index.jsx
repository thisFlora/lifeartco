import React from "react";
import CompanyElements from "../CompanyElements";

const CompanyElementsList = ({ elements }) => {
  return (
    <>
      {elements.map((element) => (
        <CompanyElements key={element.name} element={element} />
      ))}
    </>
  );
};

export default CompanyElementsList;
