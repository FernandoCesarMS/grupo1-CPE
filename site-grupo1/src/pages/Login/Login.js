import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const history = useHistory();

  return (
    <div className="baseLOG">
      <div className="corpoLOG">
    
        <h1>Login</h1>
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

          <br/>
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

export default Login;
