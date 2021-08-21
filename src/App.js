// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from './components/About';
import Textform from "./components/Textform";
import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // whethere dark mode is on or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is on ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is on ", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="Mandar Marathe"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Textform
              showAlert={showAlert}
              heading=" Enter The text to analyise Below"
              mode={mode}
            />
          </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
