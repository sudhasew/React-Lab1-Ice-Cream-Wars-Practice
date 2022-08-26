import { useState } from "react";
import { Votes } from "./Votes";
import "./AdDesigner.css";

export function AdDesigner() {
  const [flavor, setFlavor] = useState("Strawberry");
  const [theme, setTheme] = useState(false);
  const [fontSize, setFontSize] = useState(45);

  const styles = {
    fontSize: fontSize + "px",
  };

  return (
    <div>
      <h1 className="AdDesign">Ad Designer</h1>
      <div className="flavorContainer">
        <div className={theme ? "lightBtn" : "darkBtn"}>
          <h2 className="vote">Vote For</h2>
          <h2 className="flavor" style={styles}>
            {flavor}
          </h2>
        </div>
      </div>
      <h3>What to support</h3>
      <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
      <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
      <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>

      <h3>Color Theme</h3>
      <button onClick={() => setTheme(true)}>Light</button>
      <button onClick={() => setTheme(false)}>Dark</button>

      <h3>Font Size</h3>

      <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
      <label
        style={{ fontSize: "1.5rem", marginLeft: "15px", fontWeight: "700" }}
      >
        {fontSize}
      </label>
      <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
    </div>
  );
}
