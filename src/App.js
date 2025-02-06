import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let textMode = "dark";
  let textColor = "black";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ message: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      textMode = "dark";
      textColor = "black";
      showAlert("Changed to Light Mode", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#232B2B";
      textMode = "light";
      textColor = "white";
      showAlert("Changed to Dark Mode", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  const toggleGreenMode = () => {
    if (mode === "green") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      textMode = "green";
      textColor = "darkGreen";
      showAlert("Changed to Light Mode", "success");
    } else {
      setMode("green");
      document.body.style.backgroundColor = "#004f4f";
      textMode = "light";
      textColor = "white";
      showAlert("Changed to Dark Mode", "success");
    }
  };
  return (
    <>
    <Router>
        <Navbar
          title="Text Utils"
          mode={mode}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert}></Alert>
        <Routes>
        <Route path="/about" element={<About mode={mode} textMode={textMode}/>}></Route>
          <Route path="/" element={<TextForm
              heading="Enter the text to analyz"
              mode={mode}
              textMode={textMode}
              textColor={textColor}
              showAlert={showAlert}
            />}>
            
          </Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
