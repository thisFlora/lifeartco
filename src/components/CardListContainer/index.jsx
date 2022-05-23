import React, { useEffect, useState } from "react";
import CardList from "../CardList";
import "./styles.css";

const ServicesList = [
  {
    logo: "",
    name: "Service N°1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    logo: "",
    name: "Service N°2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    logo: "",
    name: "Service N°3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    logo: "",
    name: "Service N°4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    logo: "",
    name: "Service N°5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
  {
    logo: "",
    name: "Service N°6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.",
  },
];

const CardListContainer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = new Promise((res, rej) => {
      setTimeout(() => {
        res(ServicesList);
      }, 2000);
    });

    getServices.then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div class="body container">
      <div class="row">
        <CardList services={services} />
      </div>
    </div>
  );
};

export default CardListContainer;
