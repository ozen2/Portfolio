import "../styles/Navbar.css";

function NavBar() {
  return (
    <nav>
      <a className="linkNav" href="#">
        Accueil
      </a>
      <a className="linkNav" href="#soft">
        Soft Skills
      </a>
      <a className="linkNav" href="#about">
        Qui suis-je
      </a>
      <a className="linkNav" href="#hard">
        Hard Skills
      </a>
      <a className="linkNav" href="#projects">
        Projets
      </a>
      <a className="linkNav" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default NavBar;
