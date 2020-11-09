import React from "react";
import { Table } from "react-bootstrap";

function Server() {
    return (
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Servidor</th>
                    <th>Jogadores</th>
                    <th>Ping</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>País do Fogo 100</td>
                    <td>45/100</td>
                    <td>32ms</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Uchiha x Uzumaki 110</td>
                    <td>12/20</td>
                    <td>12ms</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Shinobi x Kunoichi 130</td>
                    <td>77/100</td>
                    <td>20ms</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ninjutsu x Taijutsu x Genjutsu 122</td>
                    <td>23/30</td>
                    <td>55ms</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Yamanaka x Inuzuka 102</td>
                    <td>5/20</td>
                    <td>33ms</td>
                </tr>
                    <tr>
                    <td>6</td>
                    <td>País do Trovão</td>
                    <td>0/100</td>
                    <td>25ms</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Brasil</td>
                    <td>98/100</td>
                    <td>5ms</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Global</td>
                    <td>243/250</td>
                    <td>980ms</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Privado</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Server;