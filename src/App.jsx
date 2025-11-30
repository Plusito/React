import "./App.css";
import Menu from "./Menu/menu";

const menu = [
  {
    text: "youtube",
    link: "https://youtube.com",
  },
  {
    text: "git hub",
    link: "https://github.com",
  },
  {
    text: "chess",
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
