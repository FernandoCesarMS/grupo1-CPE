import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Personagem() {
  const history = useHistory();
  return (
    <div>
      <center>
        <h1>Personagem</h1>
        <br />
      </center>
      <div className="gender">
        <p>Escolha seu gênero:</p>
        <div class="card-group">
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src="images/masculino-png.png" />
            <Card.Body>
              <Card.Title>Masculino</Card.Title>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src="images/feminino-png.png" />
            <Card.Body>
              <Card.Title>Feminino</Card.Title>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="escolha-person">
        <p>Escolha uma raça:</p>
        <div class="card-group">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/elfopng.png" />
            <Card.Body>
              <Card.Title>Elfo</Card.Title>
              <Card.Text>
                Arqueiros habilidosos e inteligentes, vivem isolados nas
                florestas.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/druid-female-png.png" />
            <Card.Body>
              <Card.Title>Druida</Card.Title>
              <Card.Text>
                Detentores de alta sabedoria, adoradores de Gaia e com altas
                habilidades curandeiras.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/anão-png.png" />
            <Card.Body>
              <Card.Title>Anão</Card.Title>
              <Card.Text>
                Apesar de sua baixa estatura, possuem altas habilidades táticas
                e alta inteligência.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/orc-png.png" />
            <Card.Body>
              <Card.Title>Orc</Card.Title>
              <Card.Text>
                Grandes, fortes, brutos e territoriais por natureza! São
                guerreiros natos.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/human-png.png" />
            <Card.Body>
              <Card.Title>Humano</Card.Title>
              <Card.Text>
                A raça mais numerosa em Manatee, sem habilidades natas mas com
                altíssima destreza e tática em batalhas.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
      <div className="escolha-person2">
        <p>Escolha uma classe:</p>
        <div class="card-group">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/mago-png.png" />
            <Card.Body>
              <Card.Title>Mago</Card.Title>
              <Card.Text>
                Se utilizam da magia primitiva e da alquimia para lutar e
                auxiliar seus governantes, podendo agir com passividade ou
                agressividade.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/guerreiro-png.png" />
            <Card.Body>
              <Card.Title>Guerreiro</Card.Title>
              <Card.Text>
                Detentores de grandes triunfos em batalhas e dominadores da arte
                da guerra. Por onde passam realizam uma verdadeira carnificina
                caso precisem lutar.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/ladino-png.png" />
            <Card.Body>
              <Card.Title>Ladino</Card.Title>
              <Card.Text>
                Furtivos por natureza e sagazes de nascimento. Aquele que nasce
                ou ingressa no clã dos ladinos certamente fatura em cima de
                qualquer um, mas toda atitude tem seu preço. Não espere ser
                menos que um intineirante de feudos e tavernas.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/necromante-png.png" />
            <Card.Body>
              <Card.Title>Necromante</Card.Title>
              <Card.Text>
                Conhecedores das artes das trevas, os necromantes certamente não
                pensam duas vezes antes de atacar quando precisam. Cuidado ao
                passar em travessias e pontes, pois se deparar com um te exige
                um alto preço.
              </Card.Text>
              <Button variant="primary">Escolher</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/clerigo-png.png" />
            <Card.Body>
              <Card.Title>Clérigo</Card.Title>
              <Card.Text>
                Dizem que esse tipo de guerreiro carrega consigo a mão de Deus e
                o poder dos seres celestiais nas batalhas. Há quem acredite e há
                quem pague pra ver e tenha a própria vida como preço.
                <Button variant="primary">Escolher</Button>
              </Card.Text>
            </Card.Body>
          </Card>
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
