import Rutas from "./Routes/Rutas";
import { BrowserRouter } from 'react-router-dom';
import GlobalStateContext from "./context/GlobalStateContext";

const App = () => {
  
  return (
  
  <div className="App">
    <GlobalStateContext>
      <Rutas/>
    </GlobalStateContext>
  </div>
    
  )
}

export default App;