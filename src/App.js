import './App.css';
import Home from "./components/home"

function App() {
  return (
    <>

      <Home text="Ir al juego" onClick={() => alert("Me hiciste click")}/>

    </>
  );
}

export default App;
