import React from "react";
import Nav from 'react-bootstrap/Nav';

function Lista(props) {
    return (
            <Nav.Item>
                <Nav.Link eventKey={props.posicao}>{props.nome}</Nav.Link>
            </Nav.Item>
    );
}

export default Lista;