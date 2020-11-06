import React from "react";
import Story from "./Story";
import "./Historia.css";
/*
Página com a página central do jogo
*/
function Historia() {
  return (
    <div className="baseHIST">
      <div className="corpoHIST">
        <center>
          <h1>História</h1>
          <img src="/images/konoha_historia.gif" />
        </center>
        <br /> <br /> <br />
        <Story />
      </div>
    </div>
  );
}

export default Historia;
