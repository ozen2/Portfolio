import "../styles/ButtonHardFront.css";

function ButtonHardFront({imgButton, textButton}) {
  return (
    <button className="buttonDiv">
      <img className="imgButton" src={imgButton} alt="" />
      <h3 className="textButton">{textButton}</h3>
    </button>
  );
}

export default ButtonHardFront;
