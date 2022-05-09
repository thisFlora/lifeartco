import Button from "./components/Button";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Button onClick={() => {alert('Me clickeaste!')}}>Click Me</Button>
    <Footer/>
    </>
  );
}

export default App;