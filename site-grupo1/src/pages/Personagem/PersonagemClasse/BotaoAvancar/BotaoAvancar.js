import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function BotaoAvancar(){
    const history = useHistory();
    return(
        <div>
            <Button variant="success" type="Prox" onClick={() => {history.push("/Perfil")}} >Próxima</Button>
        </div>
    );
}

export default BotaoAvancar;
