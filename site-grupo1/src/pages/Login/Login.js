import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    return (
        <div>
          <h1>Login</h1>
          <button onClick={()=>{history.push("Cadastro")}}>Cadastro</button>
          <button onClick={()=>{history.push("Home")}}>Home</button>
          <button onClick={()=>{history.push("Historia")}}>Historia</button>
          <button onClick={()=>{history.push("Perfil")}}>Perfil</button>
        </div>
      );
}

export default Login;
