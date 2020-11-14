import React from "react";
import { useHistory } from "react-router-dom";
import News from "./News";
import Server from "./Server";
import { Button } from "react-bootstrap";
import "./Home.css";

import PropTypes from "prop-types";
import "../Menu/Menu.css";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

function EscondeBarra(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2e1534',
  },
}));

function Menu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>
      <EscondeBarra {...props}>
        <AppBar position="fixed">
          <Tabs
            onChange={handleChange}
            aria-label="menu-superior"
            centered
          >
            <Tab 
              label="História"
              onClick={() => {
                history.push("Historia");
              }}
            />
            <Tab
              label="Perfil"
              onClick={() => {
                history.push("Perfil");
              }}
            />
            <Tab
              style = {{fontWeight: "bold", fontSize: 15, color: '#FFA500',}}
              label="Home"
              onClick={() => {
                history.push("Home");
              }}
            />
            <Tab
              label="Login"
              onClick={() => {
                history.push("Login");
              }}
            />
            <Tab
              label="Cadastro"
              onClick={() => {
                history.push("Cadastro");
              }}
            />
          </Tabs>
        </AppBar>
      </EscondeBarra>
      {props.children}
              
      <div className="baseHOME" >
      <div className="apresentacao">
        <div className="informacoes">
          <h1>Sua aventura começa aqui.</h1>
          <h3>Crie seu personagem, represente seu clã 
            e jogue com seus amigos. </h3>
          <h3>Cadastre-se agora, 100% gratuito.</h3>
          <div className="mb-2">
            <Button 
            variant="primary" 
            size="lg"
            onClick={()=>{
              history.push("/Cadastro");
            }}
            >
              Cadastrar
          </Button>
            <Button 
            variant="success" 
            size="lg"
            onClick={()=>{
              history.push("/Login");
            }}
            >
              Login
          </Button>
          </div>
        </div>
      </div>

      <div className="diferenciais">
        <div className="features">
          <h1 className="title">Entre nessa aventura!</h1>
          <h3 className="texto">
            - 100% gratuito
          </h3>
          <h3 className="texto">
            - Jogue com dezenas de outros jogadores
          </h3>
          <h3 className="texto">
            - Escolha o clã e a classe que mais se aproximam de seu estilo
          </h3>
          <h3 className="texto">
            - Evolua seu personagem através de diversos níveis
          </h3>
          <h3 className="texto">
            - Diversos modos de combate e gameplay disponíveis 
          </h3>
        </div>
      </div>

      <div className="noticias">
          <h1>Notícias e Eventos</h1>
          <News />
      </div>
    </div>
    </div>
  );
}

export default Menu;


/*
Página inicial com apresentação do jogo em si, contendo recursos 
que chamem atenção visualmente, notícias do jogo e mais detalhes a
serem acrescentados
*/
function Home() {
  const history = useHistory();
  return (
    <div className="baseHOME" >
      <div className="apresentacao">
        <div className="informacoes">
          <h1>Sua aventura começa aqui.</h1>
          <h3>Crie seu personagem, represente seu clã 
            e jogue com seus amigos. </h3>
          <h3>Cadastre-se agora, 100% gratuito.</h3>
          <div className="mb-2">
            <Button 
            variant="primary" 
            size="lg"
            onClick={()=>{
              history.push("/Cadastro");
            }}
            >
              Cadastrar
          </Button>
            <Button 
            variant="success" 
            size="lg"
            onClick={()=>{
              history.push("/Login");
            }}
            >
              Login
          </Button>
          </div>
        </div>
      </div>

      <div className="diferenciais">
        <div className="features">
          <h1 className="title">Entre nessa aventura!</h1>
          <h3 className="texto">
            - 100% gratuito
          </h3>
          <h3 className="texto">
            - Jogue com dezenas de outros jogadores
          </h3>
          <h3 className="texto">
            - Escolha o clã e a classe que mais se aproximam de seu estilo
          </h3>
          <h3 className="texto">
            - Evolua seu personagem através de diversos níveis
          </h3>
          <h3 className="texto">
            - Diversos modos de combate e gameplay disponíveis 
          </h3>
        </div>
      </div>

      <div className="noticias">
          <h1>Notícias e Eventos</h1>
          <News />
      </div>
    </div>
  );
}