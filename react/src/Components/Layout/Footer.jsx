import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Lado esquerdo do meu footer */}
      <div className="footer-left">
        <img className="logo-footer" src="../../../public/logo.png" alt="Logo" />
        <ul className="footer-links">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <p className="copyright">© Kauan Matheus 2025</p>
      </div>

      {/* Lado direito do footer */}
      <div className="footer-right">
        <div className="footer-medias">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="footer-contact">
          <p>Email: kauan@email.com</p>
          <p>Telefone: +55 11 99999-9999</p>
          <p>Telefone2: +55 11 99999-9999</p>
          <p>São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
