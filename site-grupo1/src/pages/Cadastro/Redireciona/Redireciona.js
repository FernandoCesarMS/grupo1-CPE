import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Redireciona(props) {
  const history = useHistory();
  return (
    <div>
      <Button
        variant="success"
        onClick={(e) => {
          if (props.validar.senha === props.validar.senha2 && props.validar.email !== "" && props.validar.username !== ""){
            history.push("./PersonagemGenero")
          } 
        }}
      >
        {" "}
        Cadastrar{" "}
      </Button>
    </div>
  );
}

export default Redireciona;
