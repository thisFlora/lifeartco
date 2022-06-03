import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main.js'; 
import AboutUs from "./components/AboutUs";
import CompanyElementsListContainer from "./components/CompanyElementsListContainer";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom'

function App(){
     return (
          <>
          <BrowserRouter>
               <NavBar />
               <Main />
               <AboutUs />
               <CompanyElementsListContainer/>
               <ContactForm />
               <Footer />
          </BrowserRouter>
          </>
     );
}

export default App;