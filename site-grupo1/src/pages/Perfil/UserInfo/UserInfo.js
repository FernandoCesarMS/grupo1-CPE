import React from "react";

function UserInfo(props) {
  return (
    <div>
      <p>Nome: {props.Name}</p>
      <p>Gênero: {props.Gender}</p>
      <p>Clã: {props.Cla}</p>
      <p>Técnica: {props.Tecnica}</p>
    </div>
  );
}

export default UserInfo;
