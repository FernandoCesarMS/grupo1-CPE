import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import BotaoAvancar from "./BotaoAvancar";
import "../Personagem.css";

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
export default class PersonagemGenero extends Component {
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
      <div>
        <div className="baseAtr">
          <div className="atribute">
            <h3>Escolha seu gênero:</h3>
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
                        newList[0].Genero = "Kunoichi";
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
                    <Lista posicao="first" nome="Kunoichi" atributo="genero" />
                  </Button>
                  <Button
                    variant=""
                    onClick={() => {
                      newList = this.state.list.filter(function (p) {
                        return p.on === "1";
                      });
                      if (newList.length > 0) {
                        newList[0].Genero = "Shinobi";
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
                    <Lista posicao="second" nome="Shinobi" atributo="genero" />
                  </Button>
                </Nav>

                <Tab.Content>
                  <Atributo
                    posicao="first"
                    nome="kunoichi"
                    img="images/Personagem/Genero/kunoichi4.png"
                    text="Seja uma kunoichi e prove seu valor para se tornar a maior ninja da Aldeia da Folha.
                                Não será uma jornada fácil, mas você poderá contar com os membros de seu clã para isso.
                                'Não importa o quão poderoso você se torne nunca tente fazer tudo sozinho, caso contrario irá falhar.' - Uchiha, Itachi."
                    forca="+6"
                    agilidade="+6"
                    inteligencia="+6"
                    chakra="+6"
                    estamina="+6"
                  />
                  <Atributo
                    posicao="second"
                    nome="shinobi"
                    img="images/Personagem/Genero/shinobi4.png"
                    text="Seja um shinobi e prove seu valor para se tornar o maior ninja da Aldeia da Folha.
                                Não será uma jornada fácil, mas você poderá contar com os membros de seu clã para isso.
                                'Não importa o quão poderoso você se torne nunca tente fazer tudo sozinho, caso contrario irá falhar.' - Uchiha, Itachi."
                    forca="+6"
                    agilidade="+6"
                    inteligencia="+6"
                    chakra="+6"
                    estamina="+6"
                  />
                </Tab.Content>
              </Tab.Container>
            </div>
            <div className="botoes">
              <BotaoAvancar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
