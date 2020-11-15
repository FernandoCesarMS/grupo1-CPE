import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Lista from "../Lista/Lista";
import Atributo from "../Atributo/Atributo";
import "../Personagem.css";
import BotaoVoltar from "./BotaoVoltar";
import BotaoAvancar from "./BotaoAvancar";
import { Button } from "@material-ui/core";

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
          <h3>Escolha seu clã:</h3>
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
                      newList[0].Cla = "Akimichi";
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
                  <Lista posicao="first" nome="Akimichi" atributo="cla" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Cla = "Hyuga";
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
                  <Lista posicao="second" nome="Hyuga" atributo="cla" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Cla = "Inuzuka";
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
                  <Lista posicao="third" nome="Inuzuka" atributo="cla" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Cla = "Uchiha";
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
                  <Lista posicao="fourth" nome="Uchiha" atributo="cla" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Cla = "Uzumaki";
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
                  <Lista posicao="fifth" nome="Uzumaki" atributo="cla" />
                </Button>
                <Button
                  variant=""
                  onClick={() => {
                    newList = this.state.list.filter(function (p) {
                      return p.on === "1";
                    });
                    if (newList.length > 0) {
                      newList[0].Cla = "Yamanaka";
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
                  <Lista posicao="sixth" nome="Yamanaka" atributo="cla" />
                </Button>
              </Nav>

              <Tab.Content>
                <Atributo
                  posicao="first"
                  nome="akimichi"
                  img="images/Personagem/Cla/akimichi1.png"
                  text="Conseguem converter chakra em caloria, por serem mais adaptados a um corpo obeso,  
                          no qual conseguem expandir as partes ou o corpo inteiro, aumentando a massa muscular.  
                          A força física e velocidade também são drasticamente aumentadas com a expansão,  
                          permitindo socos esmagadores com a expansão do punho."
                  forca="+6"
                  agilidade="+5"
                  inteligencia="+5"
                  chakra="+8"
                  estamina="+6"
                />
                <Atributo
                  posicao="second"
                  nome="hyuga"
                  img="images/Personagem/Cla/hyuga.png"
                  text="Todos os membros nascidos neste clã possuem o Byakugan, um poderoso kekkei genkai que lhes dá  
                          campos extensos de visão e a capacidade de ver através de objetos sólidos e até mesmo  
                          o sistema circulatório chakra, sendo uma importante ténica de ataque, onde é focado nos  
                          pontos de chakra mais importantes."
                  forca="+6"
                  agilidade="+8"
                  inteligencia="+7"
                  chakra="+6"
                  estamina="+3"
                />
                <Atributo
                  posicao="third"
                  nome="inuzuka"
                  img="images/Personagem/Cla/inuzuka.png"
                  text="Conhecida por seu uso de cães ninjas como companheiros de luta e são facilmente  
                          identificados pelas distintas presas vermelhas marcadas em suas bochechas, símbolo de 
                          seu clã. Possuem habilidade de rastreamento através do faro, muito útil na perseguição 
                          de um inimigo."
                  forca="+6"
                  agilidade="+9"
                  inteligencia="+4"
                  chakra="+4"
                  estamina="+7"
                />
                <Atributo
                  posicao="fourth"
                  nome="uchiha"
                  img="images/Personagem/Cla/uchiha.png"
                  text="Possuem habilidades com armas ninja de arremesso, jutsus com uso do fogo, além  
                          de serem portadores do kekkei genkai Sharingan, que lhes permite ganhar diversas vantagens,  
                          como copiar jutsus do oponente, percepção avançada em camo de batalha, e outras várias  
                          técnicas que podem ser aprimoradas."
                  forca="+6"
                  agilidade="+5"
                  inteligencia="+9"
                  chakra="+5"
                  estamina="+5"
                />
                <Atributo
                  posicao="fifth"
                  nome="uzumaki"
                  img="images/Personagem/Cla/uzumaki.png"
                  text="Os membros deste clã possuem habilidade na arte de fūinjutsu, técnica de selamento  
                          de objetos, chakra e seres vivos. Os membros deste clã possuem incrível longevidade e  
                          força de vida. Além disso, possuem grandes reservas de chakra e uma recuperação  
                          incrivelmente rápida após serem feridos."
                  forca="+7"
                  agilidade="+5"
                  inteligencia="+3"
                  chakra="+8"
                  estamina="+7"
                />
                <Atributo
                  posicao="sixth"
                  nome="yamanaka"
                  img="images/Personagem/Cla/yamanaka.png"
                  text="Eles são especializados em técnicas relacionadas com a mente, portanto têm  
                          muito inteligência e uma capacidade cerebral muito avançada. Membros desse  
                          clã conseguem se comunicar através de telepatia. Durante as guerras ninja,  
                          este clã ganhou destaque por sua facilidade em retirar informações de  
                          bases inimigas."
                  forca="+5"
                  agilidade="+5"
                  inteligencia="+6"
                  chakra="+8"
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
