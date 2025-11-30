function Enlace({ text, link }) {
  return (
    <div className="link">
      <a className="text" href={link}>
        {text}
      </a>
    </div>
  );
}

export default Enlace;
