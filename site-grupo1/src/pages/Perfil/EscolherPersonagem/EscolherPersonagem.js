import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function EscolherPersonagem(){
    const history = useHistory();
    return(
        <div>
            <Button variant="success" type="Prox" onClick={() => {history.push("/PersonagemGenero")}} >Escolher Personagem</Button>
        </div>
    );
}

export default EscolherPersonagem;
