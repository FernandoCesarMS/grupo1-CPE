import React from "react";
import { useHistory } from "react-router-dom";
import News from "./News";
import Server from "./Server";
import { Button } from "react-bootstrap";
import "./Home.css";

/*
Página inicial com apresentação do jogo em si, contendo recursos 
que chamem atenção visualmente, notícias do jogo e mais detalhes a
serem acrescentados
*/
function Home() {
  const history = useHistory();
  return (
    <div className="baseHOME" >
      <div className="apresentacao">
        <div className="informacoes">
          <h1>Sua aventura começa aqui.</h1>
          <h3>Crie seu personagem, represente seu clã 
            e jogue com seus amigos. </h3>
          <h3>Cadastre-se agora, 100% gratuito.</h3>
          <div className="mb-2">
            <Button 
            variant="primary" 
            size="lg"
            onClick={()=>{
              history.push("/Cadastro");
            }}
            >
              Cadastrar
          </Button>
            <Button 
            variant="success" 
            size="lg"
            onClick={()=>{
              history.push("/Login");
            }}
            >
              Login
          </Button>
          </div>
        </div>
      </div>

      <div className="diferenciais">
        <div className="features">
          <h1 className="title">Entre nessa aventura!</h1>
          <h3 className="texto">
            - 100% gratuito
          </h3>
          <h3 className="texto">
            - Jogue com dezenas de outros jogadores
          </h3>
          <h3 className="texto">
            - Escolha o clã e a classe que mais se aproximam de seu estilo
          </h3>
          <h3 className="texto">
            - Evolua seu personagem através de diversos níveis
          </h3>
          <h3 className="texto">
            - Diversos modos de combate e gameplay disponíveis 
          </h3>
        </div>
      </div>

      <div className="noticias">
          <h1>Notícias e Eventos</h1>
          <News />
      </div>
    </div>
  );
}

export default Home;