import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import "../Personagem.css";

function PersonagemGenero() {
    const history = useHistory();

    return (
        <div className="baseAtr">
            <div className="atribute">
                <h3>Escolha seu gênero:</h3>
                <div className="atributeselect">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <Nav variant="pills" className="flex-column">
                            <Lista posicao="first" nome="Kunoichi" atributo="genero"/>
                            <Lista posicao="second" nome="Shinobi" atributo="genero"/>
                        </Nav>

                        <Tab.Content>
                            <Atributo
                                posicao="first"
                                nome="kunoichi"
                                img="images/Personagem/Genero/kunoichi4.png"
                                text="Seja uma kunoichi e prove seu valor para se tornar a maior ninja da Aldeia da Folha.
                                Não será uma jornada fácil, mas você poderá contar com os membros de seu clã para isso.
                                'Não importa o quão poderoso você se torne nunca tente fazer tudo sozinho, caso contrario irá falhar.' - Uchiha, Itachi."
                                forca="+6"
                                agilidade="+6"
                                inteligencia="+6"
                                chakra="+6"
                                estamina="+6"
                            />
                            <Atributo
                                posicao="second"
                                nome="shinobi"
                                img="images/Personagem/Genero/shinobi4.png"
                                text="Seja um shinobi e prove seu valor para se tornar o maior ninja da Aldeia da Folha.
                                Não será uma jornada fácil, mas você poderá contar com os membros de seu clã para isso.
                                'Não importa o quão poderoso você se torne nunca tente fazer tudo sozinho, caso contrario irá falhar.' - Uchiha, Itachi."
                                forca="+6"
                                agilidade="+6"
                                inteligencia="+6"
                                chakra="+6"
                                estamina="+6"
                            />
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <div className="botoes">
                    <Button
                        variant="danger"
                        type="prox"
                        onClick={() => {
                            history.push("/Cadastro");
                        }}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="success"
                        type="prox"
                        onClick={() => {
                            history.push("/PersonagemCla");
                        }}
                    >
                        Próxima
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default PersonagemGenero;