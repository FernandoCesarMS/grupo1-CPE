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
          <Cartao widthC="10rem" img="images/shinobi4.png" name="Shinobi" />
          <Cartao widthC="10rem" img="images/kunoichi4.png" name="Kunoichi" />
        </div>
      </div>
      {/* Div que contém a escolha do Clã */}
      <div className="escolha-person1">
        <h3>Escolha um Clã:</h3>
        {/* Primeira linha da escolha de personagens */}
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/akimichi1.png"
            name="Akimichi"
            text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
            no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
            A força física e velocidade também são drasticamente aumentadas com a expansão,  
            permitindo socos esmagadores com a expansão do punho."
          />

          <Cartao
            widthC="18rem"
            img="images/hyuga.png"
            name="Hyuga"
            text="Todos os membros nascidos neste clã possuem o Byakugan, um poderoso kekkei genkai que lhes dá  
            campos extensos de visão e a capacidade de ver através de objetos sólidos e até mesmo  
            o sistema circulatório chakra, sendo uma importante ténica de ataque, onde é focado nos  
            pontos de chakra mais importantes."
          />

          <Cartao
            widthC="18rem"
            img="images/inuzuka.png"
            name="Inuzuka"
            text="Conhecida por seu uso de cães ninjas como companheiros de luta e são facilmente  
            identificados pelas distintas presas vermelhas marcadas em suas bochechas, símbolo de 
            seu clã. Possuem habilidade de rastreamento através do faro, muito útil na perseguição 
            de um inimigo."
          />

          <Cartao
            widthC="18rem"
            img="images/uchiha.png"
            name="Uchiha"
            text="Possuem habilidades com armas ninja de arremesso, jutsus com uso do fogo, além  
            de serem portadores do kekkei genkai Sharingan, que lhes permite ganhar diversas vantagens,  
            como copiar jutsus do oponente, percepção avançada em camo de batalha, e outras várias  
            técnicas que podem ser aprimoradas."
          />

          <Cartao
            widthC="18rem"
            img="images/uzumaki.png"
            name="Uzumaki"
            text="Os membros deste clã possuem habilidade na arte de fūinjutsu, técnica de selamento  
            de objetos, chakra e seres vivos. Os membros deste clã possuem incrível longevidade e  
            força de vida. Além disso, possuem grandes reservas de chakra e uma recuperação  
            incrivelmente rápida após serem feridos."
          />
          <Cartao
            widthC="18rem"
            img="images/yamanaka.png"
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
        <h3>Escolha uma técnica:</h3>
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/ninjutsu.png" 
            name="Ninjutsu" 
            text="O Ninjutsu molda o chakra de acordo com o que o usuário deseja, podendo combinar
             com elementos da natureza, usar para cura ou outra das diversas possibilidades."
          />

          <Cartao
            widthC="18rem"
            img="images/taijutsu.png" 
            name="Taijutsu" 
            text="O Taijutsu é uma forma básica de técnicas e refere-se a qualquer técnica que 
            envolva artes marciais ou a otimização das habilidades humanas naturais. Não requer 
            uso de chakra."
          />

          <Cartao
            widthC="18rem"
            img="images/genjutsu.png" 
            name="Genjutsu" 
            text="O Genjutsu controla o fluxo de chakra no cérebro do oponente causando uma 
            pertubação dos sentidos, induzindo a pessoa a sentir dor ou algum trauma e afetar 
            seu psicológico."
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
