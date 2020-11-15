import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import "../Personagem.css";

function PersonagemClasse() {
    const history = useHistory();

    return (
        <div className="baseAtr">
            <div className="atribute">
                <h3>Escolha sua técnica:</h3>
                <div className="atributeselect">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <Nav variant="pills" className="flex-column">
                            <Lista posicao="first" nome="Ninjutsu" atributo="classe" />
                            <Lista posicao="second" nome="Taijutsu" atributo="classe"/>
                            <Lista posicao="third" nome="Genjutsu" atributo="classe"/>
                        </Nav>

                        <Tab.Content>
                            <Atributo
                                posicao="first"
                                nome="ninjutsu"
                                img="images/Personagem/Tecnica/ninjutsu.png"
                                text="O Ninjutsu molda o chakra de acordo com o que o usuário deseja, podendo combinar
                                com elementos da natureza, usar para cura ou outra das diversas possibilidades."
                                forca="+5"
                                agilidade="+5"
                                inteligencia="+4"
                                chakra="+8"
                                estamina="+8"
                            />
                            <Atributo
                                posicao="second"
                                nome="taijutsu"
                                img="images/Personagem/Tecnica/taijutsu.png"
                                text="O Taijutsu é uma forma básica de técnicas e refere-se a qualquer técnica que 
                                envolva artes marciais ou a otimização das habilidades humanas naturais. Não requer 
                                uso de chakra."
                                forca="+8"
                                agilidade="+7"
                                inteligencia="+5"
                                chakra="+0"
                                estamina="+10"
                            />
                            <Atributo
                                posicao="third"
                                nome="genjutsu"
                                img="images/Personagem/Tecnica/genjutsu.png"
                                text="O Genjutsu controla o fluxo de chakra no cérebro do oponente causando uma 
                                pertubação dos sentidos, induzindo a pessoa a sentir dor ou algum trauma e afetar 
                                seu psicológico."
                                forca="+7"
                                agilidade="+3"
                                inteligencia="+9"
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
                            history.push("/PersonagemCla");
                        }}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="success"
                        type="prox"
                        onClick={() => {
                            history.push("/Perfil");
                        }}
                    >
                        Concluir
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PersonagemClasse;