import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Redireciona(props) {
  const history = useHistory();
  return (
    <div>
      <Button variant="primary" onClick={(e) => {history.push("/PersonagemGenero")}}> Escolha seu Personagem</Button>
    </div>
  );
}

export default Redireciona;