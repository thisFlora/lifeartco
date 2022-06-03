import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main.js'; 
import { BrowserRouter } from 'react-router-dom'

function App(){
     return (
          <>
          <BrowserRouter>
               <NavBar />
               <Main />
          </BrowserRouter>
          </>
     );
}

export default App;