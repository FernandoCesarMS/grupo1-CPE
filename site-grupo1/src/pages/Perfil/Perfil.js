import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Perfil.css";
import UserInfo from "./UserInfo";
import EscolherPersonagem from "./EscolherPersonagem";
import "../Menu/Menu.css";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

/*
A página Perfil tem como função possibilitar ao usuário a visualização dos
seus principais dados.
Para fazer a imagem principal do perfil, foi utilizado o componente Avatar
do framework material
*/
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

function Perfil(props) {
  const classes1 = useStyles1();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className="basePERFIL">
      {/* Div que armazena a página inteira */}
      <div className="body">
        {/* Div que contêm as informações do perfil */}
        <div className={classes1.imagemPrincipal}>
          {/* Div que contêm a imagem do personagem */}
          <Avatar src='images/Personagem/Genero/shinobi4.png' />
        </div>
        <div className="text">
          <UserInfo
            Name={props.Name}
            Gender={props.Gender}
            Cla={props.Cla}
            Tecnica={props.Tecnica}
          />
          <EscolherPersonagem/>
        </div>
      </div>

      <div class="ImageLeft">

        <img src="/images/Perfil/narutoperfil.png"></img>

      </div>

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
              style = {{fontWeight: "bold", fontSize: 15, color: '#FFA500',}}
              label="Perfil"
              onClick={() => {
                history.push("Perfil");
              }}
            />
            <Tab
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
    </div>

    </div>
  );
}

export default Perfil;
