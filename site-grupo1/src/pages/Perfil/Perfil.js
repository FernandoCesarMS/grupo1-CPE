import React from "react";
import { useHistory } from "react-router-dom";

function Perfil() {
  const history = useHistory();
  return (
    <div>
      <h1>Perfil</h1>
      <button onClick={()=>{history.push("Cadastro")}}>Cadastro</button>
      <button onClick={()=>{history.push("Home")}}>Home</button>
      <button onClick={()=>{history.push("Login")}}>Login</button>
      <button onClick={()=>{history.push("Historia")}}>Historia</button>
    </div>
  );
}

export default Perfil;
