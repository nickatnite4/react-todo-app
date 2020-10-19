import React from "react";
import ReactDOM from "react-dom";

//Import components below
import Header from "./components/Header";
import InputTask from "./components/InputTask";

function ExampleComponent() {
  return (
    <div>
      <Header />
      <InputTask />
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));
