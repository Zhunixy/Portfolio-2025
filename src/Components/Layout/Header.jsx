import React, { useState } from "react";
import "./Header.css";

//Aqui eu comecei a fazer o componente Header 
//Com a funcionalidade de abrir e fechar o menu de navegação ao clicar na logo.
function Header() {
  //nessa parte eu criei um estado para controlar se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  //função para alternar o estado do menu
  const navOpen = () => {
    //inverte o valor atual de menuAberto
    setMenuAberto(!menuAberto);
  };

  //Aqui eu só retorno pro meu componente a estrutura do header
  return (
    <nav>
      {/* nessa parte ele esta criando uma classe dinamica, que ela pode alternar
        Entre "open" e "closed" dependendo do estado do menuAberto 
        que foi criado acima no useState;
        ai dps eu tenho a logo que ao clicar nela chama a função navOpen que alterna o estado do menu

        NOTA: esse menuAberto ? "open" : "closed" é uma forma curta de fazer um if else, um operador ternário
        Se menuAberto for true, ele retorna "open", se for false, ele retorna "closed"
      */}
      <div className={`container ${menuAberto ? "open" : "closed"}`}>
        <img
          src="/logo.png" 
          alt="Logo"
          className="logo-img"
          onClick={navOpen}
        />
        {/* aqui eu tenho a lista de links de navegação que tbm
        recebem uma classe dinamica "nav-active" quando o menu está aberto
        se menu aberto for true retorna "nav-active", se for false retorna vazio
        */}
        <ul className={`nav-links ${menuAberto ? "nav-active" : ""}`}>
          <li><a href="/Home"><i class="fa-solid fa-house icone-navs"></i>Início</a></li>
          <li><a href="/Sobre"><i class="fa-solid fa-address-card icone-navs"></i>Sobre Mim</a></li>
          <li><a href="/Projeto"><i class="fa-solid fa-diagram-project icone-navs"></i>Projetos</a></li>
          <li><a href="/Contato"><i class="fa-solid fa-images icone-navs"></i>Galeria</a></li>
          <li><a href="/Contato"><i class="fa-solid fa-phone-volume icone-navs"></i>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

//exportei o componente Header para ser usado em outros arquivos
export default Header;
