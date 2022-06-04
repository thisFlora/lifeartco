import React from 'react'
import CarouselContainer from './Carousel/CarouselContainer.js'
import CardContainer from './Companies/CardContainer.js'
import AboutUs from "./AboutUs/AboutUs";
import CompanyElementsListContainer from "./CompanyElementsListContainer/CompanyElementsListContainer";
import ContactForm from "./ContactForm/ContactForm";
import Home from './Home.js';

function Main() {
     return (
          <main as ="container">
               <Home />
               <AboutUs />
               <CompanyElementsListContainer />
               <CarouselContainer />
               <CardContainer />
               <ContactForm />
          </main>
     );
}

export default Main