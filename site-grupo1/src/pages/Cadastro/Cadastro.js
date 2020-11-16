import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import Redireciona from "./Redireciona";
import MenuCadastro from "./MenuCadastro";
import axios from "axios";
import "./Cadastro.css";

/*
A página Cadastro tem como função possibilitar a criação de um perfil pelo usuário
com dados como Nome, Idade, CPF etc.
A implementação, atualmente, utiliza o componente Campo, com alguns componentes
do framework Bootstrap
*/
const baseUrl = "http://localhost:3001/users"; //Endereço do Banco de Dados
const initialState = {
  user: {
    name: "",
    idade: "",
    email: "",
    cpf: "",
    username: "",
    senha: "",
    senha2: "",
    on: "1",
    Cla: "",
    Genero: "",
    Tecnica: "",
  },
  list: [],
};
let senhax = "";
let senhay = "";

export default class Cadastro extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }
  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }
  renderForm() {
    return (
      <div className="baseCAD">
        <div className="corpoCAD">
          <Form>
            <Form.Group controlId="NomeCompleto">
              <Form.Label>Nome Completo</Form.Label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(event) => this.updateField(event)}
                placeholder="Nome Completo"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="Idade">
                <Form.Label>Idade</Form.Label>
                <input
                  type="text"
                  className="form-control"
                  name="idade"
                  value={this.state.user.idade}
                  onChange={(event) => this.updateField(event)}
                  placeholder="Idade"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="CPF">
                <Form.Label>CPF</Form.Label>
                <input
                  type="text"
                  className="form-control"
                  name="cpf"
                  value={this.state.user.cpf}
                  onChange={(event) => this.updateField(event)}
                  placeholder="CPF"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="nomeUsuario">
              <Form.Label>Nome de Usuário</Form.Label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.user.username}
                onChange={(event) => this.updateField(event)}
                placeholder="Nome de Usuário"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Endereço de email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Endereço de email"
                value={this.state.user.email}
                onChange={(event) => {
                  this.updateField(event);
                }}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="Senha">
                <Form.Label>Crie sua senha</Form.Label>
                <Form.Control
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  value={this.state.user.senha}
                  onChange={(event) => {
                    this.updateField(event);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="SenhaConf">
                <Form.Label>Confirme sua senha</Form.Label>
                <Form.Control
                  type="password"
                  name="senha2"
                  value={this.state.user.senha2}
                  placeholder="Digite sua senha"
                  onChange={(event) => {
                    this.updateField(event);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group as={Col} controlId="Cadast">
              <Button
                variant="success"
                type="Cadastrar"
                onClick={(e) => {
                  if (
                    this.state.user.senha2 === this.state.user.senha &&
                    this.state.user.username !== "" &&
                    this.state.user.email !== ""
                  ) {
                    alert("Usuario Cadastrado");
                    this.state.list.map((user) => {
                      user.on = "0";
                      const method = user.id ? "put" : "post";
                      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
                      axios[method](url, user).then((resp) => {
                        const list = this.getUpdatedList(resp.data);
                        this.setState({ user: initialState.user, list });
                      });
                    });
                    this.save(e);
                  } else alert("Cadastro Incompleto/Inválido!");
                }}
              >
                Cadastrar
              </Button>
            </Form.Group>
            <Form.Group as={Col} controlId="Avancar"></Form.Group>
          </Form>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <MenuCadastro />
        {this.renderForm()}
      </div>
    );
  }
}
/*

*/
