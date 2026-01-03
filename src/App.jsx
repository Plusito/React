import "./App.css";
import Boton from "./components/Lista de botones/Boton";

function test() {
  console.log("TEST: Approved");
}

function App() {
  return (
    <>
      <Boton text="text" onClick={test} />
    </>
  );
}

export default App;
