import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';

import Alert from './components/Alert';
import { Outlet } from 'react-router-dom';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#011027"
      showAlert("Dark Mode has been enabled", "danger")
      document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // },1500);
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "primary")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        title="TextUtils"
        about="About Text"
      />
      <Alert
        alert={alert}
      />
      <TextForm
        showAlert={showAlert}
        mode={mode}
        heading="Enter the text to analyze"
      />
      <Outlet/>
    </>
  );
}

export default App;