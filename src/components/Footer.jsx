import "./Footer.css";

const Footer = ({ phrase }) => {
  return (
    <div className="container_circle">
      <div className="text_container_circle">
        <p>Fuente: {phrase.author}</p>
      </div>
    </div>
  );
};

export default Footer;
