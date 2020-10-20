import React from "react";
import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
    return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>{history.push("Cadastro")}}>Cadastro</button>
      <button onClick={()=>{history.push("Historia")}}>Historia</button>
      <button onClick={()=>{history.push("Login")}}>Login</button>
      <button onClick={()=>{history.push("Perfil")}}>Perfil</button>
    </div>
  );
}

export default Home;
