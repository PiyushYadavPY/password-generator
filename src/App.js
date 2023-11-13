import React, { useState } from "react";

import "./App.css";
function App() {
  const [password, setPassword] = useState("");

  const [containUpperCase, setContainUpperCase] = useState(false);
  const [containDigit, setContainDigit] = useState(false);
  const [containSymbol, setContainSymbol] = useState(false);
  const [length, setLength] = useState(8);

  function handleDigit() {
    setContainDigit(!containDigit);
  }

  function handleUpperCase() {
    setContainUpperCase(!containUpperCase);
  }
  function handleSymbol() {
    setContainSymbol(!containSymbol);
  }
  function handleLength(event) {
    setLength(event.target.value);
  }

  function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let dict = lowercaseChars;

    if (containDigit) {
      dict += numberChars;
    }

    if (containUpperCase) {
      dict += uppercaseChars;
    }

    if (containSymbol) {
      dict += symbolChars;
    }

    let newPassword = "";

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * dict.length);
      newPassword += dict.charAt(randomIndex);
    }
    setPassword(newPassword);
  }
  return (
    <div className="App  flex flex-col items-center justify-center h-screen bg-gray-500 ">
      <h1 className="text-3xl font-bold mb-4">Create Your Password</h1>
      <labe htmlFor="length">Enter the length </labe>
      <input
      className="rounded-md"
        type="number"
        id="length"
        value={length}
        onChange={(e) => {
          handleLength(e);
        }}
      />
      <label htmlFor="number">Should the number contains number</label>
      <input
        type="checkbox"
        id="number"
        checked={containDigit}
        onChange={handleDigit}
      />
      <label htmlFor="upperCase">Should the number contains Uppercase</label>
      <input
        type="checkbox"
        id="uppercase"
        checked={containUpperCase}
        onChange={handleUpperCase}
      />
      <label htmlFor="symbols">Should the number contains symbols</label>
      <input
        type="checkbox"
        id="symbol"
        checked={containSymbol}
        onChange={handleSymbol}
      />

      <h1 className="text-xl font-semibold mb-4" >{password}</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
