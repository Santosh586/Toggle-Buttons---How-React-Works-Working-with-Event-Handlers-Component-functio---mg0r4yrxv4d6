import React, {useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [btn1Text, setBtn1Text] = useState("OFF");
  const [btn2Text, setBtn2Text] = useState("ON");

  const handleClick = () => {
    setBtn1Text((prevState) => (prevState === "OFF" ? "ON" : "OFF"));
    setBtn2Text((prevState) => (prevState === "OFF" ? "ON" : "OFF"));
  };

  return (
    <div>
      <button id="btn1" onClick={handleClick}>
        {btn1Text}
      </button>
      <button id="btn2" onClick={handleClick}>
        {btn2Text}
      </button>
    </div>
  );
};

export default App;
