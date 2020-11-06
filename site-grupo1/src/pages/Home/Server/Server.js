import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Server() {
    return (
        <ListGroup>
            <ListGroup.Item action variant="info">
                Geral (amigável)
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Uchiha x Uzumaki 110
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Shinobi x Kunoichi 100
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Ninjutsu x Taijutsu x Genjutsu 102
            </ListGroup.Item>
            <ListGroup.Item action variant="danger">
                Todos contra Todos
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Hyuga x Yamanaka 098
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
                Privado
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Server;