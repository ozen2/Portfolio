import "../styles/Contact.css";

function ContactCard({name, classCard, classIcon, img, classContent,text, blank,href,textContent,imgHover}) {
  return (
    <div class={classCard}>
      <div class={classIcon}>
        <img src={img} alt="" />
      </div>
      <strong> {name}</strong>
      <div class={classContent}>{textContent}</div>
      <a href={href} target={blank}>{text}</a>
      <img src={imgHover} className="image" alt="" />
    </div>
  );
}

export default ContactCard;
