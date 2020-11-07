import React from "react";
import Story from "./Story";
import { Card } from "react-bootstrap";
import "./Historia.css";


/*
Página com a página central do jogo
*/
function Historia() {
  return (
    <div className="baseHIST">
      <div className="corpoHIST">
        <div className="quote">
          <h5>
            "Você pode morrer como um herói ou viver tempo suficiente para se tornar o vilão."
          </h5>
        </div>
        <Story />
      </div>

      <div className="sideimages">
        <Card border="primary" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="/images/Historia/mapahistoria.png" />
          <Card.Body>
            <Card.Text>
              Mapa do mundo.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <br/> 
        <Card border="primary" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="/images/Historia/fotoaldeiadafolha.jpg"  />
          <Card.Body>
            <Card.Text>
              Aldeia da Folha.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Historia;
