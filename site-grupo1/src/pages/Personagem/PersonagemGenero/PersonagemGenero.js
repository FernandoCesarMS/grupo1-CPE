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
                            <Lista posicao="first" nome="Kunoichi" />
                            <Lista posicao="second" nome="Shinobi" />
                        </Nav>

                        <Tab.Content>
                            <Atributo
                                posicao="first"
                                nome="kunoichi"
                                img="images/Personagem/Genero/kunoichi4.png"
                                text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
                                no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
                                A força física e velocidade também são drasticamente aumentadas com a expansão,  
                                permitindo socos esmagadores com a expansão do punho. "
                                forca="+2"
                                agilidade="+6"
                                resiliencia="+1"
                                magia="+4"
                                furtividade="+2"
                            />
                            <Atributo
                                posicao="second"
                                nome="shinobi"
                                img="images/Personagem/Genero/shinobi4.png"
                                text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
                                no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
                                A força física e velocidade também são drasticamente aumentadas com a expansão,  
                                permitindo socos esmagadores com a expansão do punho. "
                                forca="+5"
                                agilidade="+2"
                                resiliencia="+7"
                                magia="+1"
                                furtividade="+1"
                            />
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
            <div className="botoes">
                <Button
                    variant="danger"
                    type="prox"
                    onClick={() => {
                        history.push("/PersonagemCla");
                    }}
                >
                    Voltar
                </Button>
                <Button
                    variant="success"
                    type="prox"
                    onClick={() => {
                        history.push("/PersonagemClasse");
                    }}
                >
                    Próxima
              </Button>
            </div>
        </div>
    );
}

export default PersonagemGenero;