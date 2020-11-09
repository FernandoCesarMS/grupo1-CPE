import React from "react";
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
  return (
    <div className="baseHOME" >
      <div className="apresentacao">
        <div className="informacoes">
          <h1>Sua aventura começa aqui.</h1>
          <h3>Crie seu personagem, represente seu clã 
            e jogue com seus amigos. </h3>
          <h3>Cadastre-se agora, 100% gratuito.</h3>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Cadastrar
          </Button>{' '}
            <Button variant="success" size="lg">
              Login
          </Button>
          </div>
        </div>
      </div>

      <div className="diferenciais">
        <div className="features">
          <h1>Entre nessa aventura!</h1>
          <h3>
            - 100% gratuito
          </h3>
          <h3>
            - Jogue com dezenas de outros jogadores
          </h3>
          <h3>
            - explicando o jogo, etc.
          </h3>
        </div>
      </div>

      <div className="noticias">
        <div className="news">
          <h1>Notícias e Eventos</h1>
          <News />
        </div>

        <div className="server">
          <h1>Servidores Disponíveis</h1>
          <Server />
          <Button variant="dark">Entrar no servidor</Button>
        </div>
        
      </div>

      <div className="rodape">

      </div>
    </div>
  );
}

export default Home;
