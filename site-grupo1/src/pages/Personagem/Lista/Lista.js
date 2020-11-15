import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import axios from "axios";


function Lista(props) {
    const [escolhaGen, setEscolhaGen] = useState("Kunoichi");
    const [escolhaCla, setEscolhaCla] = useState("Akimichi");
    const [escolhaClasse, setEscolhaClasse] = useState("Ninjutsu");

    useEffect(()=> {
        if(props.atributo === "genero")
            setEscolhaGen(props.nome);
        else if(props.atributo === "cla")
            setEscolhaCla(props.nome);
        else
            setEscolhaClasse(props.nome);
    }, [props.nome]);

    return (
        <Nav.Item>
            <Nav.Link
                eventKey={props.posicao}
            >
                {props.nome}
            </Nav.Link>
        </Nav.Item>
    );
}

export default Lista;