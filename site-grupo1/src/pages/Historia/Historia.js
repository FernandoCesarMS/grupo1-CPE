import React from "react";
import Story from "./Story";
import Figure from 'react-bootstrap/Figure'
import "./Historia.css";


/*
Página com a página central do jogo
*/
function Historia() {
  return (
    <div className="baseHIST">
      <div className="historia">
        <div className="quote">
          <h5>
            "Você pode morrer como um herói ou viver tempo suficiente para se tornar o vilão."
          </h5>
        </div>
        <Story />
      </div>

      <div className="sideimages">
        <Figure>
          <Figure.Image
            alt="Mapa do mundo"
            src="/images/Historia/mapahistoria.png"
          />
          <Figure.Caption>
            Mapa do mundo.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            alt="Aldeia da Folha"
            src="/images/Historia/fotoaldeiadafolha.jpg"
          />
          <Figure.Caption>
            Aldeia da Folha.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default Historia;
