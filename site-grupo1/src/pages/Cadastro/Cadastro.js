import React from "react";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Campo from "./Campo";
import "./Cadastro.css";
/*
A página Cadastro tem como função possibilitar a criação de um perfil pelo usuário
com dados como Nome, Idade, CPF etc.
A implementação, atualmente, utiliza o componente Campo, com alguns componentes
do framework Bootstrap
*/
function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [CPF, setCPF] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState(0);
  const [senha2, setSenha2] = useState(1);
  const history = useHistory();

  return (
    <div className="baseCAD">
      <div className="corpoCAD">
        <Form>
          <Form.Group controlId="NomeCompleto">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              placeholder="Nome Completo"
              onChange={(event) => {
                setNome(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="Idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                placeholder="Idade"
                onChange={(event) => {
                  setIdade(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="CPF">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                placeholder="CPF"
                onChange={(event) => {
                  setCPF(event.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="nomeUsuario">
            <Form.Label>Nome de Usuário</Form.Label>
            <Form.Control
              placeholder="Nome de Usuário"
              onChange={(event) => {
                setUsuario(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Endereço de email</Form.Label>
            <Form.Control
              placeholder="Endereço de email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="Senha">
              <Form.Label>Crie sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  setSenha1(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="SenhaConf">
              <Form.Label>Confirme sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={(event) => {
                  setSenha2(event.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>

          <Button
            variant="success"
            type="Cadastrar"
            onClick={() => {
              if (senha1 !== senha2) alert("Senhas diferentes!");
              else {
                alert("Cadastrado!");
                history.push("/PersonagemGenero");
              }
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Cadastro;