import React from "react";
import "./Perfil.css";
/*
A página Perfil tem como função possibilitar ao usuário a visualização dos
seus principais dados.
*/
function Perfil() {
  return (
    <div className="basePERFIL">
      <center>
        <h1>Perfil</h1>
      </center>
      <p>Nome: </p>
      <p>Gênero: </p>
      <p>Clã: </p>
      <p>Classe: </p>
    </div>
  );
}

export default Perfil;
