import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

/*
Código do menu superior que aparece em todas as páginas
A implementação, atualmente, utiliza o framework material
*/

function EscondeBarra(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Menu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>
      <EscondeBarra {...props}>
        <AppBar position="fixed">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="menu-superior"
            centered
          >
            <Tab
              label="História"
              {...a11yProps(4)}
              onClick={() => {
                history.push("Historia");
              }}
            />
            <Tab
              label="Perfil"
              {...a11yProps(2)}
              onClick={() => {
                history.push("Perfil");
              }}
            />
            <Tab
              label="Home"
              {...a11yProps(0)}
              onClick={() => {
                history.push("Home");
              }}
            />
            <Tab
              label="Login"
              {...a11yProps(3)}
              onClick={() => {
                history.push("Login");
              }}
            />
            <Tab
              label="Cadastro"
              {...a11yProps(1)}
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

export default Menu;