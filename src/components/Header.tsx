import "../App.css";

const Header = () => {
  return (
    <>
      <header className="header max-width bg-1">
        <a href="/" className="logo">
          <img src="../public/favicon.png" alt="" />
        </a>
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <a href="https://github.com/JoaoSBarbosa" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joao-da-silva-barbosa/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://joaosbarbosa.com.br/" target="_blank">
                Portfolio
              </a>
            </li>
            <li>
              <a href="">Projeto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
