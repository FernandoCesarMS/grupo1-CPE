import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { Button } from "react-bootstrap";

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

const useStyles1 = makeStyles((theme) => ({
  imagemPrincipal: {
    // Defina como será a imagem
    display: "flex",
    "& > *": {
      margin: theme.spacing(5), // Afasta os outros componentes
      width: theme.spacing(30), // Largura da imagem
      height: theme.spacing(30), // Altura da imagem
    },
  },
}));

export default class UserInfo extends Component {
  state = { ...initialState };
  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }
  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }
  render() {
    let auxNome = "";
    let auxGender = "";
    let auxCla = "";
    let auxTec = "";
    let lista = [];
    lista = this.state.list.filter(function (p) {
      if (p.on === "1") {
        auxNome = p.username;
        auxGender = p.Genero;
        auxCla = p.Cla;
        auxTec = p.Tecnica;
      }
      return p.on === "1";
    });
    console.log(lista[0]);
    return (
      <div>
        <p>Usuário: {auxNome} </p>
        <p>Gênero: {auxGender}</p>
        <p>Clã: {auxCla}</p>
        <p>Técnica: {auxTec}</p>
        <Button
          variant="success"
          onClick={() => {
            this.state.list.map((user) => {
              user.on = "0";
              const method = user.id ? "put" : "post";
              const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
              axios[method](url, user).then((resp) => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });
              });
            });
          }}
        >
          Deslogar
        </Button>
      </div>
    );
  }
}
