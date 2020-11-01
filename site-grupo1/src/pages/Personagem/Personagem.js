import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cartao from "./Cartao";
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
      <div className="gender">
        {/* Div que contém a escolha de gênero */}
        <h3>Escolha seu gênero:</h3>
        {/* Foi utilizado o "class='card-group'", pois ele permite a organização dos
        cartões no esquema de coluna */}
        <div class="card-group">
          <Cartao
            widthC="10rem"
            img="images/masculino-png.png"
            name="Masculino"
          />
          <Cartao
            widthC="10rem"
            img="images/feminino-png.png"
            name="Feminino"
          />
        </div>
      </div>
      {/* Div que contém a escolha do Clã, foi dividido em dois card-groups. 
        Cada um desses card-groups representa uma linha */}
      <div className="escolha-person1">
        <h3>Escolha um Clã:</h3>
        {/* Primeira linha da escolha de personagens */}
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/Cla/Aburame.jpg"
            name="Aburame"
            text="Caracterizados pelo uso de insetos como armas. Ao nascer, os membros deste  
            clã são oferecidos a uma raça especial de insetos, como o kikaichū como um  
            ninho, residente apenas sob a pele de seu hospedeiro. Esses insetos, então,  
            vivem em simbiose com seu hospedeiro."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Akimichi.png"
            name="Akimichi"
            text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
            no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
            A força física e velocidade também são drasticamente aumentadas com a expansão,  
            permitindo socos esmagadores com a expansão do punho."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Hyuuga.png"
            name="Hyuuga"
            text="Todos os membros nascidos neste clã possuem o Byakugan, um kekkei genkai que lhes dá  
            campos extensos de visão e a capacidade de ver através de objetos sólidos e até mesmo  
            o sistema circulatório chakra, entre outras coisas."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Inuzuka.jpg"
            name="Inuzuka"
            text="Conhecida por seu uso de cães ninjas como companheiros de luta e são facilmente  
            identificados pelas distintas presas vermelhas marcadas em suas bochechas."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Nara.jpg"
            name="Nara"
            text="O clã Nara é conhecido por sua inteligência, ninjutsu que envolve a manipulação  
            de sombras, e cuidando de veados que pastam em uma grande área de da floresta  
            do clã Nara."
          />
          <br />
        </div>
      </div>
      {/* Segunda linha da escolha de personagens */}
      <div className="escolha-person1">
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/Cla/Sarutobi.jpg"
            name="Sarutobi"
            text="Produziu vários membros notáveis que ocuparam posições de grande autoridade,  
            como Hokage, e membros dos Doze Guardiões Ninja. Todos os membros conhecidos  
            também têm sido observados como devotos da Vontade do Fogo."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Uchiha.jpg"
            name="Uchiha"
            text="Possuem habilidades com armas ninja, jutsus com uso do fogo, além de serem  
            portadores do kekkei genkai Sharingan, que lhes permite ganhar diversas  
            vantagens em batalha, como copiar jutsus, percepção avançada, e diversas  
            técnicas que podem ser aprimoradas."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Uzumaki.jpg"
            name="Uzumaki"
            text="Os membros deste clã são muito versados na arte de fūinjutsu. Os membros  
            deste clã possuem incrível longevidade e força de vida. Além disso, possuem  
            grandes reservas de chakra e uma recuperação incrivelmente rápida após  
            serem feridos."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/Yamanaka.png"
            name="Yamanaka"
            text="Eles são especializados em técnicas relacionadas com a mente, portanto têm  
            muito inteligência e uma capacidade cerebral muito avançada. Membros desse  
            clã conseguem se comunicar através de telepatia. Durante as guerras ninja,  
            este clã ganhou destaque por sua facilidade em retirar informações de  
            bases inimigas."
          />
          <br />
        </div>
      </div>
      {/* Div que contêm a escolha de classe */}
      <div className="escolha-person">
        <h3>Escolha uma classe:</h3>
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/Cla/mago-png.png"
            name="Mago"
            text="Se utilizam da magia primitiva e da alquimia para lutar e 
            auxiliar seus governantes, podendo agir com passividade ou agressividade."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/guerreiro-png.png"
            name="Guerreiro"
            text="Detentores de grandes triunfos em batalhas e dominadores da arte da guerra.  
            Por onde passam realizam uma verdadeira carnificina caso precisem lutar."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/ladino-png.png"
            name="Ladino"
            text="Furtivos por natureza e sagazes de nascimento. Aquele que nasce 
            ou ingressa no clã dos ladinos certamente fatura em cima de 
            qualquer um, mas toda atitude tem seu preço. Não espere ser 
            menos que um intineirante de feudos e tavernas."
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/necromante-png.png"
            name="Necromante"
            text="Conhecedores das artes das trevas, os necromantes certamente não 
            pensam duas vezes antes de atacar quando precisam. Cuidado ao 
            passar em travessias e pontes, pois se deparar com um te exige alto preço"
          />

          <Cartao
            widthC="18rem"
            img="images/Cla/clerigo-png.png"
            name="Clérigo"
            text="Dizem que esse tipo de guerreiro carrega consigo a mão de Deus e
            o poder dos seres celestiais nas batalhas. Há quem acredite e há
            quem pague pra ver e tenha a própria vida como preço."
          />
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
