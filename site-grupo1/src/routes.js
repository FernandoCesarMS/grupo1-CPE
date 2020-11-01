import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Historia from "./pages/Historia";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";
import Personagem from "./pages/Personagem";
/*
Página que implementa as rotas entre as páginas e adiciona o menu superior
em todas as páginas
*/

// Função que organiza as rotas
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={inserirMenu} />
        <Route exact path="/Personagem" component={inserirMenu} />
        <Route exact path="/Cadastro" component={inserirMenu} />
        <Route exact path="/Historia" component={inserirMenu} />
        <Route exact path="/Perfil" component={inserirMenu} />
        <Route path="/Home" component={inserirMenu} />
        <Route path="/" component={inserirMenu} />
      </Switch>
    </BrowserRouter>
  );
}

// Função que insere o menu nas páginas
function inserirMenu() {
  return (
    <Menu>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cadastro" component={Cadastro} />
        <Route exact path="/Historia" component={Historia} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/Personagem" component={Personagem} />
        {/* A linha abaixo redireciona qualquer outro codigo para a página home */}
        <Route component={() => <Redirect to="/Home" />} />
      </Switch>
    </Menu>
  );
}
export default Routes;
