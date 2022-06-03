import React from "react";

const CardItem = ({companie}) => {
	return (
          <div className="companies-card">
               <img src={companie.img} className="card-img-top" alt="logo" />
          </div>
	);
};

export default CardItem;