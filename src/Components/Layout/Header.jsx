import React, { useState } from "react";
import "./Header.css";
//utilizando o Link pra puxar as rotas
import { Link } from "react-router-dom";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const navOpen = () => {
    setMenuAberto(!menuAberto);
  };

  //usamos o Link To ="" para especificar a rota quando clicar
  return (
    <nav>
      <div className={`container ${menuAberto ? "open" : "closed"}`}>
        <img
          src="/logo.png"
          alt="Logo"
          className="logo-img"
          onClick={navOpen}
        />

        <ul className={`nav-links ${menuAberto ? "nav-active" : ""}`}>
          <li>
            <Link to="/">
              <i className="fa-solid fa-house icone-navs"></i>Início
            </Link>
          </li>
          <li>
            <Link to="/Sobre">
              <i className="fa-solid fa-address-card icone-navs"></i>Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="/Projetos">
              <i className="fa-solid fa-diagram-project icone-navs"></i>Projetos
            </Link>
          </li>
          <li>
            <Link to="/Galeria">
              <i className="fa-solid fa-images icone-navs"></i>Galeria
            </Link>
          </li>
          <li>
            <Link to="/Contato">
              <i className="fa-solid fa-phone-volume icone-navs"></i>Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
