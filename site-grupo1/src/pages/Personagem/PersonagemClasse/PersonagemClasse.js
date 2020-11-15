import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import "../Personagem.css";
import BotaoVoltar from "./BotaoVoltar";
import BotaoAvancar from "./BotaoAvancar";

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

export default class PersonagemClasse extends Component {
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
    let newList = [];
    return (
      <div className="baseAtr">
        <div className="atribute">
          <h3>Escolha sua técnica:</h3>
          <div className="atributeselect">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="pills" className="flex-column">
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Tecnica = "Ninjutsu";
                      const user = newList[0];
                      const method = user.id ? "put" : "post";
                      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
                      axios[method](url, user).then((resp) => {
                        const list = this.getUpdatedList(resp.data);
                        this.setState({ user: initialState.user, list });
                      });
                    }
                  }}
                >
                  <Lista posicao="first" nome="Ninjutsu" atributo="classe" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Tecnica = "Taijutsu";
                      const user = newList[0];
                      const method = user.id ? "put" : "post";
                      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
                      axios[method](url, user).then((resp) => {
                        const list = this.getUpdatedList(resp.data);
                        this.setState({ user: initialState.user, list });
                      });
                    }
                  }}
                >
                  <Lista posicao="second" nome="Taijutsu" atributo="classe" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Tecnica = "Genjutsu";
                      const user = newList[0];
                      const method = user.id ? "put" : "post";
                      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
                      axios[method](url, user).then((resp) => {
                        const list = this.getUpdatedList(resp.data);
                        this.setState({ user: initialState.user, list });
                      });
                    }
                  }}
                >
                  <Lista posicao="third" nome="Genjutsu" atributo="classe" />
                </Button>
              </Nav>

              <Tab.Content>
                <Atributo
                  posicao="first"
                  nome="ninjutsu"
                  img="images/Personagem/Tecnica/ninjutsu.png"
                  text="O Ninjutsu molda o chakra de acordo com o que o usuário deseja, podendo combinar
                                    com elementos da natureza, usar para cura ou outra das diversas possibilidades."
                  forca="+5"
                  agilidade="+5"
                  inteligencia="+4"
                  chakra="+8"
                  estamina="+8"
                />
                <Atributo
                  posicao="second"
                  nome="taijutsu"
                  img="images/Personagem/Tecnica/taijutsu.png"
                  text="O Taijutsu é uma forma básica de técnicas e refere-se a qualquer técnica que 
                                    envolva artes marciais ou a otimização das habilidades humanas naturais. Não requer 
                                    uso de chakra."
                  forca="+8"
                  agilidade="+7"
                  inteligencia="+5"
                  chakra="+0"
                  estamina="+10"
                />
                <Atributo
                  posicao="third"
                  nome="genjutsu"
                  img="images/Personagem/Tecnica/genjutsu.png"
                  text="O Genjutsu controla o fluxo de chakra no cérebro do oponente causando uma 
                                    pertubação dos sentidos, induzindo a pessoa a sentir dor ou algum trauma e afetar 
                                    seu psicológico."
                  forca="+7"
                  agilidade="+3"
                  inteligencia="+9"
                  chakra="+6"
                  estamina="+6"
                />
              </Tab.Content>
            </Tab.Container>
          </div>
          <div className="botoes">
            <BotaoVoltar />
            <BotaoAvancar />
          </div>
        </div>
      </div>
    );
  }
}
