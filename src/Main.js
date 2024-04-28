import { useState } from "react";

const Main = () => {
  const [color, setColor] = useState();
  const addColor = {
    backgroundColor: "value",
  };
  return (
    <main>
      <div className="main-container">
        <div className="color-container"></div>
        <div className="input-container" style={addColor}>
          <input
            type="text"
            className="input"
            id="Add Colors"
            placeholder="White"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className="label-field"
            htmlFor="Add Colors"
            aria-label="Add Colors"
          >
            Add Color
          </label>
        </div>
      </div>
    </main>
  );
};

export default Main;
