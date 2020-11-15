import React, { Component } from "react";
import axios from "axios";
import MenuLogin from "./MenuLogin"
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: {
    name: "",
    idade: "",
    email: "",
    cpf: "",
    username: "",
    senha: "",
    on: "0",
    Cla: "",
    Genero: "",
    Tecnica: "",
  },
  list: [],
};
export default class Login extends Component {
  state = { ...initialState };
  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }
  renderLogin() {
    let auxUsername = "";
    let auxPassword = "";
    let newList = [];
    return (
      /* Foi utilizado o componente Form do Bootstrap para implementar o formulário de Cadastro do usuário */
      <div className="baseLOG">
        <div className="corpoLOG">
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                type="username"
                placeholder="Nome de usuário"
                onChange={(e) => (auxUsername = e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(e) => (auxPassword = e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="login"
              onClick={() => {
                newList = this.state.list.filter(function (p) {
                  return p.username === auxUsername;
                });
                if (newList.length > 0 && newList[0].senha === auxPassword) {
                  alert("Entrou!");
                  newList[0].on = "1";
                  const user = newList[0];
                  const method = user.id ? "put" : "post";
                  const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
                  axios[method](url, user).then((resp) => {
                    const list = this.getUpdatedList(resp.data);
                    this.setState({ user: initialState.user, list });
                  });
                } else alert("Login inválido");
              }}
            >
              LOGIN
            </Button>
            <br /> <br />
            <input id="logar" type="checkbox" />
            <label htmlFor="logar">Mantenha-me logado</label>
            <center>
              <p>Ainda não tem uma conta? </p>
              <Link to="/Cadastro">Criar uma nova conta</Link>
            </center>
          </Form>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <MenuLogin />
        {this.renderLogin()}
      </div>
    );
  }
}
