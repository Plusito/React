import "./App.css";
import Menu from "./Menu/menu";

const menu = [
  {
    text: "Youtube",
    link: "https://youtube.com",
    imge: <img src="" alt="" />,
  },
  {
    text: "Git Hub",
    link: "https://github.com",
  },
  {
    text: "Chess",
    link: "https://chess.com",
  },
];

function App() {
  return (
    <>
      <Menu links={menu} />
    </>
  );
}

export default App;
