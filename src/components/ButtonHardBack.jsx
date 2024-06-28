import "../styles/ButtonHardBack.css";

function ButtonHardBack({imgButton, textButton}) {
  return (
    <button className="buttonDiv2">
      <img className="imgButton2" src={imgButton} alt="" />
      <h3 className="textButton2">{textButton}</h3>
    </button>
  );
}

export default ButtonHardBack;
