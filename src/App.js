import React from "react";
import AboutUs from "./components/AboutUs";
import CompanyElementsListContainer from "./components/CompanyElementsListContainer";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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
