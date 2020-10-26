import React from "react";
import { useHistory } from "react-router-dom";
import { Button, } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Personagem() {
    const history = useHistory();
    return (
        <div >
            <center>
                <h1>Personagem</h1>
                <br />
            </center>
            <div className="gender">
            <p>Escolha seu gênero:</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/masculino-png.png" />
                    <Card.Body>
                        <Card.Title>Masculino</Card.Title>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/feminino-png.png" />
                    <Card.Body>
                        <Card.Title>Feminino</Card.Title>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="escolha-person">
                <p>Escolha uma raça:</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/elfopng.png" />
                    <Card.Body>
                        <Card.Title>Elfo</Card.Title>
                        <Card.Text>
                            Arqueiros habilidosos e inteligentes, vivem isolados nas florestas.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/druid-female-png.png" />
                    <Card.Body>
                        <Card.Title>Druida</Card.Title>
                        <Card.Text>
                            Detentores de alta sabedoria, adoradores de Gaia e com altas habilidades curandeiras.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/anão-png.png" />
                    <Card.Body>
                        <Card.Title>Anão</Card.Title>
                        <Card.Text>
                            Apesar de sua baixa estatura, possuem altas habilidades táticas e alta inteligência.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/orc-png.png" />
                    <Card.Body>
                        <Card.Title>Orc</Card.Title>
                        <Card.Text>
                            Grandes, fortes, brutos e territoriais por natureza! São guerreiros natos.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/human-png.png" />
                    <Card.Body>
                        <Card.Title>Humano</Card.Title>
                        <Card.Text>
                            A raça mais paia que tem.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <br />
            </div>
            <div className="escolha-person2">
                <p>Escolha uma classe:</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/mago-png.png" />
                    <Card.Body>
                        <Card.Title>Mago</Card.Title>
                        <Card.Text>
                            umas bruxaria doida.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/guerreiro-png.png" />
                    <Card.Body>
                        <Card.Title>Guerreiro</Card.Title>
                        <Card.Text>
                            A glr porradeira.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/ladino-png.png" />
                    <Card.Body>
                        <Card.Title>Ladino</Card.Title>
                        <Card.Text>
                            Hoje eu sou ladrao artigo 157.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/necromante-png.png" />
                    <Card.Body>
                        <Card.Title>Necromante</Card.Title>
                        <Card.Text>
                            Ressucita defunto.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/clerigo-png.png" />
                    <Card.Body>
                        <Card.Title>Clérigo</Card.Title>
                        <Card.Text>
                            Uns padre vida loka.
                        </Card.Text>
                        <Button variant="primary">Escolher</Button>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <br />
                <Button
                    variant="primary"
                    type="login"
                    onClick={() => {
                        history.push("/Perfil");
                    }}>
                    CRIAR
          </Button>
            </div>
        </div>
    );
}

export default Personagem;