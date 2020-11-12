import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./Perfil.css";
import UserInfo from "./UserInfo";
/*
A página Perfil tem como função possibilitar ao usuário a visualização dos
seus principais dados.
Para fazer a imagem principal do perfil, foi utilizado o componente Avatar
do framework material
*/
const useStyles = makeStyles((theme) => ({
  imagemPrincipal: {
    // Defina como será a imagem
    display: "flex",
    "& > *": {
      margin: theme.spacing(5), // Afasta os outros componentes
      width: theme.spacing(30), // Largura da imagem
      height: theme.spacing(30), // Altura da imagem
    },
  },
}));

function Perfil(props) {
  const classes = useStyles();

  return (
    <div className="basePERFIL">
      {/* Div que armazena a página inteira */}
      <div className="body">
        {/* Div que contêm as informações do perfil */}
        <div className={classes.imagemPrincipal}>
          {/* Div que contêm a imagem do personagem */}
          <Avatar src="/broken-image.jpg" />
        </div>
        <div className="text">
          <UserInfo
            Name={props.Name}
            Gender={props.Gender}
            Cla={props.Cla}
            Tecnica={props.Tecnica}
          />
        </div>
      </div>

      <div class="ImageLeft">

        <img src="/images/Perfil/narutoramen.png"></img>

      </div>
    </div>
  );
}

export default Perfil;
