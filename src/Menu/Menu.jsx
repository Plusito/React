import Enlace from "./Enlace";

function Menu({ links }) {
  return (
    <>
      {links.map((e) => (
        <Enlace link={e.link} text={e.text} imge={e.imge} />
      ))}
    </>
  );
}

export default Menu;
