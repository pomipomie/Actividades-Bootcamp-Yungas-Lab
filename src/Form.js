import { useState } from "react";
import { useAlertContext } from "./alertsProvider";

export default function Form() {
  const [text, setText] = useState("");
  const addAlert = useAlertContext();

  function handleTextChange(event) {
    setText(event.target.value);
  }
  function handleClick() {
    addAlert(text);
  }

  return (
    <div className="box">
      <h1>Ingresa una palabra:</h1>
      <div className="box_input">
        <input value={text} onChange={handleTextChange} />
      </div>
      <button onClick={handleClick}>Show alert</button>
    </div>
  );
}