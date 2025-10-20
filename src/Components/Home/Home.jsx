import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  //fazendo efeito de digitação

  //aqui defini qual vai ser a msg toda
  const textoTodo = "Seja bem vindo ao meu portfólio";
  //aqui to definindo os estados do texto e do index
  //inicialmente o texto é vazio e o index é 0
  //setTexto e index vou usar para atualizar os estados
  const [texto, setTexto] = useState("");
  const [index, setIndex] = useState(0);
  //aqui é a velocidade da digitação
  const velocidade = 80; //milisegundos

  //aqui é o efeito de digitação, use effect vai rodar toda vez que o index ou o texto mudar

  useEffect(() => {
    // o if vai garantir que só continua digitando se o index for menor que o tamanho do texto todo
    if (index < textoTodo.length) {
      //aqui ele vai esperar o tempo definido na velocidade e depois adicionar o próximo caractere ao texto
      const timeoutId = setTimeout(() => {
        //setTexto vai atualizar o estado do texto, adicionando o próximo caractere
        setTexto(texto + textoTodo.charAt(index));
        //setIndex vai atualizar o estado do index, incrementando em 1
        setIndex(index + 1);
      }, velocidade);
      //aqui a gente limpa o timeout para evitar problemas
      return () => clearTimeout(timeoutId);
    }
    //se o index for igual ao tamanho do texto todo, a digitação termina
  }, [index, texto]);

  return (
    <div className="container-home">
        {/* aqui é onde o texto digitado vai aparecer */}
      <h1 className="titulo-home">{texto}<span className="cursor"></span>  <span className="tecla">|</span> </h1>
      
      <p className="p-home">Desça para mais informações</p>
      <i class="fa-solid fa-computer-mouse scroll"></i>
    </div>
  );
}

export default Home;
