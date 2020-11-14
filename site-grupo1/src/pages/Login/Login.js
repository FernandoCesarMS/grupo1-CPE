import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

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
              label="Home"
              onClick={() => {
                history.push("Home");
              }}
            />
            <Tab
              style = {{fontWeight: "bold", fontSize: 15, color: '#FFA500',}}
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

      <div className="baseLOG">
      <div className="corpoLOG">
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control type="username" placeholder="Nome de usuário" />
          </Form.Group>

          <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button
            variant="primary"
            type="login"
            onClick={() => {
              history.push("/Perfil");
            }}>
            LOGIN
          </Button>

          <br /> <br />
          <input id="logar" type="checkbox"/>
          <label htmlFor="logar">Mantenha-me logado</label>

          <center>
            <p>Ainda não tem uma conta? </p>
            <Link to="/Cadastro">Criar uma nova conta</Link>
          </center>
          
        </Form>
      </div>
    </div>
    </div>
  );
}

export default Menu;


function Login() {
  const history = useHistory();

  return (
    <div className="baseLOG">
      <div className="corpoLOG">
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control type="username" placeholder="Nome de usuário" />
          </Form.Group>

          <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>

          <Button
            variant="primary"
            type="login"
            onClick={() => {
              history.push("/Perfil");
            }}>
            LOGIN
          </Button>

          <br /> <br />
          <input id="logar" type="checkbox"/>
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