import React from "react";
import { useHistory } from "react-router-dom";

function Historia() {
    const history = useHistory();
    return (
        <div>
          <h1>Historia</h1>
          <button onClick={()=>{history.push("Cadastro")}}>Cadastro</button>
          <button onClick={()=>{history.push("Home")}}>Home</button>
          <button onClick={()=>{history.push("Login")}}>Login</button>
          <button onClick={()=>{history.push("Perfil")}}>Perfil</button>
        </div>
      );
}

export default Historia;