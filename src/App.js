import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import CompanyElementsListContainer from "./components/CompanyElementsListContainer/CompanyElementsListContainer";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main.js';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
     return (
          <>
               <BrowserRouter>
                    <NavBar />
                    <Main />
                    <AboutUs />
                    <CompanyElementsListContainer />
                    <ContactForm />
                    <Footer />
               </BrowserRouter>
          </>
     );
};

export default App;
