import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import CompanyElementsListContainer from "./components/CompanyElementsListContainer/CompanyElementsListContainer";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <AboutUs />
      <CompanyElementsListContainer/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
