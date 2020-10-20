import React from "react";
import { useHistory } from "react-router-dom";

function Cadastro() {
    const history = useHistory();
    return (
        <div>
          <h1>Cadastro</h1>
          <button onClick={()=>{history.push("Home")}}>Home</button>
          <button onClick={()=>{history.push("Historia")}}>Historia</button>
          <button onClick={()=>{history.push("Login")}}>Login</button>
          <button onClick={()=>{history.push("Perfil")}}>Perfil</button>
        </div>
      );
}

export default Cadastro;