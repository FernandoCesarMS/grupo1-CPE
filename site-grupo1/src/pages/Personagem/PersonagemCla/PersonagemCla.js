import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import "../Personagem.css";

function PersonagemCla() {
    const history = useHistory();

    return (
        <div className="baseAtr">
            <div className="atribute">
                <h3>Escolha seu clã:</h3>
                <div className="atributeselect">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <Nav variant="pills" className="flex-column">
                            <Lista posicao="first" nome="Akimichi" />
                            <Lista posicao="second" nome="Hyuga" />
                            <Lista posicao="third" nome="Inuzuka" />
                            <Lista posicao="fourth" nome="Uchiha" />
                            <Lista posicao="fifth" nome="Uzumaki" />
                            <Lista posicao="sixth" nome="Yamanaka" />
                        </Nav>

                        <Tab.Content>
                            <Atributo
                                posicao="first"
                                nome="akimichi"
                                img="images/Personagem/Cla/akimichi1.png"
                                text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
                                no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
                                A força física e velocidade também são drasticamente aumentadas com a expansão,  
                                permitindo socos esmagadores com a expansão do punho."
                                forca="+6"
                                agilidade="+5"
                                inteligencia="+5"
                                chakra="+8"
                                estamina="+6"
                            />
                            <Atributo
                                posicao="second"
                                nome="hyuga"
                                img="images/Personagem/Cla/hyuga.png"
                                text="Todos os membros nascidos neste clã possuem o Byakugan, um poderoso kekkei genkai que lhes dá  
                                campos extensos de visão e a capacidade de ver através de objetos sólidos e até mesmo  
                                o sistema circulatório chakra, sendo uma importante ténica de ataque, onde é focado nos  
                                pontos de chakra mais importantes."
                                forca="+6"
                                agilidade="+8"
                                inteligencia="+7"
                                chakra="+6"
                                estamina="+3"
                            />
                            <Atributo
                                posicao="third"
                                nome="inuzuka"
                                img="images/Personagem/Cla/inuzuka.png"
                                text="Conhecida por seu uso de cães ninjas como companheiros de luta e são facilmente  
                                identificados pelas distintas presas vermelhas marcadas em suas bochechas, símbolo de 
                                seu clã. Possuem habilidade de rastreamento através do faro, muito útil na perseguição 
                                de um inimigo."
                                forca="+6"
                                agilidade="+9"
                                inteligencia="+4"
                                chakra="+4"
                                estamina="+7"
                            />
                            <Atributo
                                posicao="fourth"
                                nome="uchiha"
                                img="images/Personagem/Cla/uchiha.png"
                                text="Possuem habilidades com armas ninja de arremesso, jutsus com uso do fogo, além  
                                de serem portadores do kekkei genkai Sharingan, que lhes permite ganhar diversas vantagens,  
                                como copiar jutsus do oponente, percepção avançada em camo de batalha, e outras várias  
                                técnicas que podem ser aprimoradas."
                                forca="+6"
                                agilidade="+5"
                                inteligencia="+9"
                                chakra="+5"
                                estamina="+5"
                            />
                            <Atributo
                                posicao="fifth"
                                nome="uzumaki"
                                img="images/Personagem/Cla/uzumaki.png"
                                text="Os membros deste clã possuem habilidade na arte de fūinjutsu, técnica de selamento  
                                de objetos, chakra e seres vivos. Os membros deste clã possuem incrível longevidade e  
                                força de vida. Além disso, possuem grandes reservas de chakra e uma recuperação  
                                incrivelmente rápida após serem feridos."
                                forca="+7"
                                agilidade="+5"
                                inteligencia="+3"
                                chakra="+8"
                                estamina="+7"
                            />
                            <Atributo
                                posicao="sixth"
                                nome="yamanaka"
                                img="images/Personagem/Cla/yamanaka.png"
                                text="Eles são especializados em técnicas relacionadas com a mente, portanto têm  
                                muito inteligência e uma capacidade cerebral muito avançada. Membros desse  
                                clã conseguem se comunicar através de telepatia. Durante as guerras ninja,  
                                este clã ganhou destaque por sua facilidade em retirar informações de  
                                bases inimigas."
                                forca="+5"
                                agilidade="+5"
                                inteligencia="+6"
                                chakra="+8"
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
                            history.push("/PersonagemGenero");
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
        </div>

    );
}

export default PersonagemCla;