import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function BotaoVoltar(){
    const history = useHistory();
    return(
        <div>
            <Button variant="danger" type="Prox" onClick={() => {history.push("/PersonagemCla")}} >Voltar</Button>
        </div>
    );
}

export default BotaoVoltar;
