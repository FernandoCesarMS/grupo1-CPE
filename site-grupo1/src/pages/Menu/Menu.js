import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
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

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="menu-superior"
          centered
        >
          <Tab
            label="Home"
            {...a11yProps(0)}
            onClick={() => {
              history.push("Home");
            }}
          />
          <Tab
            label="Historia"
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
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
      <TabPanel value={value} index={3} />
    </div>
  );
}

export default Menu;
