import React from "react";
import Story from "./Story";
import Figure from 'react-bootstrap/Figure'
import "./Historia.css";
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
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

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
              style = {{fontWeight: "bold", fontSize: 15, color: '#FFA500',}}
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
      <div className="baseHIST">
      <div className="historia">
        <div className="quote">
          <h5>
            "Você pode morrer como um herói ou viver tempo suficiente para se tornar o vilão."
          </h5>
        </div>
        <Story />
      </div>

      <div className="sideimages">
        <Figure>
          <Figure.Image
            alt="Mapa do mundo"
            src="/images/Historia/mapahistoria.png"
          />
          <Figure.Caption>
            Mapa do mundo.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            alt="Aldeia da Folha"
            src="/images/Historia/fotoaldeiadafolha.jpg"
          />
          <Figure.Caption>
            Aldeia da Folha.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
    </div>
  );
}
export default Menu;

/*
Página com a página central do jogo
*/
function Historia() {
  
  return (
    <div className="baseHIST">
      <div className="historia">
        <div className="quote">
          <h5>
            "Você pode morrer como um herói ou viver tempo suficiente para se tornar o vilão."
          </h5>
        </div>
        <Story />
      </div>

      <div className="sideimages">
        <Figure>
          <Figure.Image
            alt="Mapa do mundo"
            src="/images/Historia/mapahistoria.png"
          />
          <Figure.Caption>
            Mapa do mundo.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            alt="Aldeia da Folha"
            src="/images/Historia/fotoaldeiadafolha.jpg"
          />
          <Figure.Caption>
            Aldeia da Folha.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}