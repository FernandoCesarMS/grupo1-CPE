import React from "react";
import Tab from 'react-bootstrap/Tab';
import { Table } from "react-bootstrap";
import "../Personagem.css";

function Atributo(props){
    return (
        <Tab.Pane eventKey={props.posicao}>
            <div className="insidetab">
                <img
                    src={props.img}
                    alt={props.nome}
                    className="img"
                    width="240"
                    height="300"
                />
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
                                    <td>Resiliência</td>
                                    <td>{props.resiliencia}</td>
                                </tr>
                                <tr>
                                    <td>Magia</td>
                                    <td>{props.magia}</td>
                                </tr>
                                <tr>
                                    <td>Furtividade</td>
                                    <td>{props.furtividade}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </Tab.Pane>

    );


}

export default Atributo;