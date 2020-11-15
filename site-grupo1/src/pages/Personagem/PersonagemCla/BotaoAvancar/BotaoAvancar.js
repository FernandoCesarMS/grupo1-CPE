import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function BotaoAvancar(){
    const history = useHistory();
    return(
        <div>
            <Button variant="success" type="Prox" onClick={() => {history.push("/PersonagemClasse")}} >Próxima</Button>
        </div>
    );
}

export default BotaoAvancar;
