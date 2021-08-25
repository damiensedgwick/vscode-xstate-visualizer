import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "2rem" }}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
