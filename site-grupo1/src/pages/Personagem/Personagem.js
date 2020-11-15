import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Lista from "./Lista/Lista";
import Atributo from "./Atributo/Atributo";
import "./Personagem.css";

/*
A página Personagem tem como função possibilitar a escolha do gênero, raça e classe,
após o cadastro.
A implementação, atualmente, utiliza o componente Cartão, que é uma modificação do
componente Card do Bootstrap
*/
function Personagem() {
  const history = useHistory();

  return (
    <div className="basePERS">
      <center>
        <h1>Personagem</h1>
        <br />
      </center>
      <div className="atribute">
        {/* Div que contém a escolha de gênero */}
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
                forca="+6"
                agilidade="+6"
                inteligencia="+6"
                chakra="+6"
                estamina="+6"
              />
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>

      {/* Div que contém a escolha do Clã */}
      <div className="atribute">
        <h3>Escolha seu clã:</h3>
        <div className="atributeselect">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">

            <Nav variant="pills">
              <Lista posicao="first" nome="Akimichi" />
              <Lista posicao="second" nome="Hyuga" />
              <Lista posicao="third" nome ="Inuzuka" />
              <Lista posicao="fourth" nome="Uchiha" />
              <Lista posicao="fifth" nome="Uzumaki" />
              <Lista posicao="sixth" nome ="Yamanaka" />
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
                agilidade="+8"
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
      </div>

      {/* Div que contêm a escolha de classe */}
      <div className="atribute">
        <h3>Escolha sua técnica:</h3>
        <div className="atributeselect">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">

            <Nav variant="pills" className="flex-column">
              <Lista posicao="first" nome="Ninjutsu" />
              <Lista posicao="second" nome="Taijutsu" />
              <Lista posicao="third" nome="Genjutsu" />
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
      </div>
      {/* Button para confirmar as escolhas acima */}
      <div>
        <br />
        <center>
          <Button
            variant="primary"
            type="login"
            onClick={() => {
              history.push("/Perfil");
            }}
          >
            CRIAR
          </Button>
        </center>
      </div>
    </div>
  );
}

export default Personagem;
