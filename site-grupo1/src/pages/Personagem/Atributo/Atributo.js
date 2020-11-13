import React from "react";
import Tab from 'react-bootstrap/Tab';
import { Table } from "react-bootstrap";
import "../Personagem.css";

function Atributo(props) {
    return (
        <Tab.Pane eventKey={props.posicao}>
            <div className="insidetab">
                <div className="info">
                    <div className="text">
                        <p>{props.text}</p>
                    </div>
                    <div className="text">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Atributo</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Força</td>
                                    <td>{props.forca}</td>
                                </tr>
                                <tr>
                                    <td>Agilidade</td>
                                    <td>{props.agilidade}</td>
                                </tr>
                                <tr>
                                    <td>Inteligência</td>
                                    <td>{props.inteligencia}</td>
                                </tr>
                                <tr>
                                    <td>Chakra</td>
                                    <td>{props.chakra}</td>
                                </tr>
                                <tr>
                                    <td>Estamina</td>
                                    <td>{props.estamina}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="sideimage">
                    <img
                        src={props.img}
                        alt={props.nome}
                        className="img"
                    />
                </div>
            </div>
        </Tab.Pane>

    );


}

export default Atributo;