import React from "react";
import CardItem from "./CardItem.js";

const CardDetail = ({companies, key}) => {
	return (
		<div className= "companies-col">
               {companies.map((companie) => {
				return <CardItem companie={companie} key={companie.id} />;
			})}
		</div>
	);
};

export default CardDetail;