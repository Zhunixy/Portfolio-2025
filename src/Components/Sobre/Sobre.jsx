import React from "react";
import "./Sobre.css";
import { Briefcase, Rocket, Target, MapPin, Code2 } from "lucide-react";

function Sobre() {
  return (
    <section className="sobre-container-horizontal">
      {/* Lado Esquerdo - Perfil */}
      <div className="sobre-esquerda">
        <img
          src="./public/minhaFoto.png"
          alt="Foto de perfil"
          className="perfil-img-horizontal"
        />
        <div className="perfil-info-horizontal">
          <h2>Kauan Alves</h2>
          <p>Desenvolvedor Full-Stack</p>
          <div className="perfil-detalhes-horizontal">
            <span>
              <MapPin size={18} /> Lins - São Paulo, Brasil
            </span>
            <div className="tecs">
              <span>
                <i class="fa-brands fa-react"></i>
              </span>
              <span>
                <i class="fa-brands fa-node"></i>
              </span>
              <span>
                <i class="fa-brands fa-html5"></i>
              </span>
              <span>
                <i class="fa-brands fa-css3-alt"></i>
              </span>
              <span>
                <i class="fa-brands fa-js"></i>
              </span>
              <span>
              <i class="fa-brands fa-php"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Conteúdo */}
      <div className="sobre-direita">
        <div className="sobre-header-horizontal">
          <h1>Sobre Mim</h1>
         
        </div>

        <p className="descricao-sobre">
          Sou uma pessoa muito dedicada a aprender e crescer na área de
          desenvolvimento de software. Tenho experiência com algumas
          tecnologias, principalmente em desenvolvimento web full-stack. Gosto
          de enfrentar desafios e encontrar soluções criativas para problemas
          complexos. Estou sempre buscando aprimorar minhas habilidades e
          contribuir para projetos inovadores.
        </p>

        {/* Linha do tempo */}
        <div className="timeline-horizontal">
          <h3>Trajetória</h3>
          <div className="timeline-cards">
            <div className="timeline-item">
              <span className="ano">2022</span>
              <p>
                Comecei a estudar programação com o curso de desenvolvimento de
                jogos da Danki Code em Java com Jframes e também com gamemaker
              </p>
            </div>
            <div className="timeline-item">
              <span className="ano">2023</span>
              <p>
                Comecei a avançar em programação web com meu ensino técnico em
                desenvolvimento de sistemas (Etec Lins), com projetos em
                Html/Css/Js
              </p>
            </div>
            <div className="timeline-item">
              <span className="ano">2024</span>
              <p>
                Desenvolvi meus primeiros projetos full-stack, Cruds e sistemas
                gerenciador em Bootstrap, Ajax, jQuery e PHP na Etec lins, com
                meu TCC sendo um e-commerce de uma loja de venda de componentes
                de computadores para a CompuLins{" "}
              </p>
            </div>
            <div className="timeline-item">
              <span className="ano">2025</span>
              <p>
                Estou atualmente cursando Ciência da Computação na Unimar, estou
                investindo ainda mais em full-stack com projetos pessoais e da
                própria faculdade, como um Sistema gerenciador de pagamentos de
                boletos em React/JQuery
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="sobre-cards-horizontal">
          <div className="card-horizontal">
            <Briefcase size={28} />
            <h4>Quem sou eu</h4>
            <p>
              Sou um desenvolvedor full-stack apaixonado por tecnologia e
              inovação.
            </p>
          </div>
          <div className="card-horizontal">
            <Rocket size={28} />
            <h4>O que eu faço</h4>
            <p>
              Crio soluções web completas, desde o front-end até o back-end.
            </p>
          </div>
          <div className="card-horizontal">
            <Target size={28} />
            <h4>Objetivo</h4>
            <p>
              Trabalhar em projetos desafiadores que ajudem pessoas e empresas
              com tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
