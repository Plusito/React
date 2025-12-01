import "./App.css";
import Menu from "./Menu/menu";

const menu = [
  {
    imge: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    text: "Youtube",
    link: "https://youtube.com",
  },
  {
    imge: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    text: "Git Hub",
    link: "https://github.com",
  },
  {
    imge: "https://play-lh.googleusercontent.com/a7R5nyeaX8lIEWdBOxjlvbyq9LcFwh3XMvNtBPEKR3LPGgdvgGrec4sJwn8tUaaSkw=s256-rw",
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
