import React, { useEffect } from "react";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    document.title = "Naruto Online";
  }, []);
  return <Routes />;
}

export default App;
