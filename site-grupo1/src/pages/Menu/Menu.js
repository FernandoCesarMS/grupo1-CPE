import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Menu() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={() => {
              history.push("Cadastro");
            }}
          >
            Cadastro
          </Button>
          <Button
            onClick={() => {
              history.push("Historia");
            }}
          >
            História
          </Button>
          <Button
            onClick={() => {
              history.push("Home");
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              history.push("Perfil");
            }}
          >
            Perfil
          </Button>
          <Typography className={classes.title} /> 
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              history.push("Login");
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Menu;
