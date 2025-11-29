import "./App.css";
import ListOfProducts from "./Lista de productos/Lista de Prods";

const list = [
  {
    name: "tomato",
    price: "1",
    description: "is a red ball",
  },
  {
    name: "Carrot",
    price: "555 ",
    description: "Long orange thing",
  },
  {
    name: "Broccoli",
    price: "3",
    description: "Green small tree",
  },
  {
    name: "Test Product",
    price: "33",
    description: "I DONT KNOW WHAT IS A small tree",
  },
];

function App() {
  return (
    <>
      <ListOfProducts list={list} />
    </>
  );
}

export default App;
