import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} />

            <Route */}
        {/* exact path="/" element= */}
        {
          <TextForm
            showAlert={showAlert}
            heading="Enter Your Text to Analyze Below"
            mode={mode}
          />
        }
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

Navbar.PropTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

export default App;
