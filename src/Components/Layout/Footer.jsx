import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Seção esquerda */}
      <div className="footer-left">
        <div className="footer-brand">
          <img className="logo-footer" src="/logo.png" alt="Logo" />
          <h2>Kauan Matheus</h2>
          <p>Desenvolvedor Full-Stack</p>
        </div>

        <ul className="footer-links">
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>

      {/* Seção central */}
      <div className="footer-center">
        <h3>Fique por dentro 🚀</h3>
        <p>Receba novidades e atualizações sobre meus projetos.</p>
        <form className="newsletter">
          <input type="email" placeholder="Seu email" />
          <button type="submit">Inscrever</button>
        </form>
      </div>

      {/* Seção direita */}
      <div className="footer-right">
        <h3>Contato</h3>
        <hr className="hr-contato" />
        <div className="footer-contact">
          <p><i className="fa-solid fa-envelope"></i> kauan@email.com</p>
          <p><i className="fa-solid fa-phone"></i> +55 11 99999-9999</p>
          <p><i className="fa-solid fa-location-dot"></i> São Paulo, Brasil</p>
        </div>

        <div className="footer-medias">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="footer-bottom">
        <p>© 2025 Kauan Matheus. Todos os direitos reservados.</p>
        <div className="footer-policy">
          <a href="#">Política de Privacidade</a> • <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
