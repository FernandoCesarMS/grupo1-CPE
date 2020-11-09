import  React from "react";
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
  const [senha1, setSenha1] = useState(0);
  const [senha2, setSenha2] = useState(1);
  const history = useHistory();

  return (
    <div className="baseCAD">
      <div className="corpoCAD">
        <h1>Cadastro</h1>
        <Form>
          <Campo col={0} id="Nome" label="Nome Completo"/>

          <Form.Row>
            <Campo col={1} id="Idade" label="Idade"/>
            <Campo col={1} id="CPF" label="CPF"/>
          </Form.Row>

          <Campo col={0} id="Nome de usuário" label="Nome de usuário"/>
          <Campo col={0} id="Endereço de email" label="Endereço de email"/>

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
                history.push("/PersonagemCla");
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