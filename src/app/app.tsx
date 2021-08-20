import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  console.log("APP HAS LOADED!!");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "12rem", fontFamily: "cursive" }}>
        Hello, World!
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
