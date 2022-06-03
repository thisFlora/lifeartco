import React from 'react'
import CarouselContainer from './Carousel/CarouselContainer.js'
import CardContainer from './Companies/CardContainer.js'
import Home from './Home.js';

function Main() {
     return (
          <main as ="container">
               <Home />
               <CarouselContainer />
               <CardContainer />
          </main>
     );
}

export default Main