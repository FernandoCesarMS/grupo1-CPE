import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [senha1, setSenha1] = useState(0);
  const [senha2, setSenha2] = useState(1);
  const history = useHistory();

  return (
    <div className="baseCAD">
      <div className="corpoCAD">
        <Form>
          <Form.Group controlId="Nome">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control placeholder="Nome completo" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="Idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control placeholder="Idade" />
            </Form.Group>

            <Form.Group as={Col} controlId="CPF">
              <Form.Label>CPF</Form.Label>
              <Form.Control placeholder="CPF" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="Username">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control placeholder="Nome de usuário" />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Endereço de email" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="Senha">
              <Form.Label>Crie sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  setSenha1(event.target.value);
                }} />
            </Form.Group>

            <Form.Group as={Col} controlId="SenhaConf">
              <Form.Label>Confirme sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  setSenha2(event.target.value);
                }} />
            </Form.Group>
          </Form.Row>

          <Button
            variant="primary"
            type="Cadastrar"
            onClick={() => {
              if (senha1 !== senha2)
                alert("Senhas diferentes!");
              else {
                alert("Cadastrado!");
                history.push("Personagem");
              }
            }}>
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Cadastro;