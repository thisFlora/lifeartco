import React from "react";
import Button from "../Button";
import CardListContainer from "../CardListContainer";
import "./styles.css";

const AboutUs = () => {
  return (
    <>
      <div class="about-section">
        <div class="inner-container">
          <h1>About Us</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            velit ducimus, enim inventore earum, eligendi nostrum pariatur
            necessitatibus eius dicta a voluptates sit deleniti autem error eos
            totam nisi neque voluptates sit deleniti autem error eos totam nisi
            neque.
          </p>
          <Button
            onClick={() => {
              alert("Me clickeaste!");
            }}
          >
            View Our Services
          </Button>
        </div>
      </div>
      <div class="what-we-do-section">
        <h1>What We Do</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit ducimus, enim inventore earum, eligendi nostrum pariatur
          necessitatibus eius dicta a voluptates sit deleniti autem error eos
          totam nisi neque voluptates sit deleniti autem error eos totam nisi
          neque.
        </p>
      </div>
      <CardListContainer />
    </>
  );
};

export default AboutUs;
