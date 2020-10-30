import React from "react";
import Story from "./Story";
import "./Historia.css";

function Historia() {
  return (
    <div className="baseHIST">
      <div className="corpoHIST">
        <center>
        <h1>História</h1>
          <img src="/images/historiarpg-png.png" />
        </center>

        <br /> <br /> <br />
        <Story />
      </div>
    </div>
  );
}

export default Historia;
