import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Historia from "./pages/Historia";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Menu from "./pages/Menu";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Historia" component={Historia} />
        <Route path="/Home" component={Home} />
        <Route path="/Perfil" component={Perfil} />
        <Route path="/Menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;