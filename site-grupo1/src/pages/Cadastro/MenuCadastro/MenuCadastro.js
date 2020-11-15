import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

function EscondeBarra(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2e1534",
  },
}));

function MenuCadastro(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>
      <EscondeBarra {...props}>
        <AppBar position="fixed">
          <Tabs onChange={handleChange} aria-label="menu-superior" centered>
            <Tab
              label="História"
              onClick={() => {
                history.push("Historia");
              }}
            />
            <Tab
              label="Perfil"
              onClick={() => {
                history.push("Perfil");
              }}
            />
            <Tab
              label="Home"
              onClick={() => {
                history.push("Home");
              }}
            />
            <Tab
              label="Login"
              onClick={() => {
                history.push("Login");
              }}
            />
            <Tab
              style={{ fontWeight: "bold", fontSize: 15, color: "#FFA500" }}
              label="Cadastro"
              onClick={() => {
                history.push("Cadastro");
              }}
            />
          </Tabs>
        </AppBar>
      </EscondeBarra>
      {props.children}
    </div>
  );
}

export default MenuCadastro;
