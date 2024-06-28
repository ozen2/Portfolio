import "../styles/Projet.css";

function ProjetAlone({ title, link, linkExtern, image, description, target }) {
  return (
    <div className="card">
      <img className="imgProject" src={image} alt="" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <a className="linkExtern" href={linkExtern} target={target}>
          {link}
        </a>
      </div>
    </div>
  );
}

export default ProjetAlone;
