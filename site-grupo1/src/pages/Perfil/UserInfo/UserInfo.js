import React, { Component } from "react";
import axios from "axios";

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

export default class UserInfo extends Component {
  state = { ...initialState };
  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
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
      </div>
    );
  }
}
