import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Cartao from "./Cartao"
import "./Personagem.css";

function Personagem() {
  const history = useHistory();
  return (
    <div className="basePERS">
      <center>
        <h1>Personagem</h1>
        <br />
      </center>

      <div className="gender">
        <h3>Escolha seu gênero:</h3>
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

      <div className="escolha-person">
        <h3>Escolha uma raça:</h3>
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/elfopng.png"
            name="Elfo"
            text="Arqueiros habilidosos e inteligentes, vivem isolados nas
            florestas."
          />

          <Cartao
            widthC="18rem"
            img="images/druid-female-png.png"
            name="Druida"
            text="Detentores de alta sabedoria, adoradores de Gaia e com altas
            habilidades curandeiras."
          />

          <Cartao
            widthC="18rem"
            img="images/anão-png.png"
            name="Anão"
            text="Apesar de sua baixa estatura, possuem altas habilidades táticas
            e alta inteligência."
          />

          <Cartao
            widthC="18rem"
            img="images/orc-png.png"
            name="Orc"
            text="Grandes, fortes, brutos e territoriais por natureza! São
            guerreiros natos."
          />

          <Cartao
            widthC="18rem"
            img="images/human-png.png"
            name="Humano"
            text="A raça mais numerosa em Manatee, sem habilidades natas mas com
            altíssima destreza e tática em batalhas."
          />
          <br />
        </div>
      </div>

      <div className="escolha-person">
        <h3>Escolha uma classe:</h3>
        <div class="card-group">
          <Cartao
            widthC="18rem"
            img="images/mago-png.png"
            name="Mago"
            text="Se utilizam da magia primitiva e da alquimia para lutar e
            auxiliar seus governantes, podendo agir com passividade ou
            agressividade."
          />

          <Cartao
            widthC="18rem"
            img="images/guerreiro-png.png"
            name="Guerreiro"
            text="Detentores de grandes triunfos em batalhas e dominadores da arte da guerra. 
            Por onde passam realizam uma verdadeira carnificina caso precisem lutar."
          />

          <Cartao
            widthC="18rem"
            img="images/ladino-png.png"
            name="Ladino"
            text="Furtivos por natureza e sagazes de nascimento. Aquele que nasce
            ou ingressa no clã dos ladinos certamente fatura em cima de
            qualquer um, mas toda atitude tem seu preço. Não espere ser
            menos que um intineirante de feudos e tavernas."
          />

          <Cartao
            widthC="18rem"
            img="images/necromante-png.png"
            name="Necromante"
            text="Conhecedores das artes das trevas, os necromantes certamente não
            pensam duas vezes antes de atacar quando precisam. Cuidado ao
            passar em travessias e pontes, pois se deparar com um te exige
            um alto preço."
          />

          <Cartao
            widthC="18rem"
            img="images/clerigo-png.png"
            name="Clérigo"
            text="Dizem que esse tipo de guerreiro carrega consigo a mão de Deus e
            o poder dos seres celestiais nas batalhas. Há quem acredite e há
            quem pague pra ver e tenha a própria vida como preço."
          />
        </div>
      </div>

      <div>
        <br />
        <center>
          <Button
            variant="primary"
            type="login"
            onClick={() => {
              history.push("/Perfil");
            }} >
            CRIAR
          </Button>
        </center>
      </div>
    </div>
  );
}

export default Personagem;
