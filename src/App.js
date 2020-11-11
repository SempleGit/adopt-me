import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, { name: "Oliver", animal: "Dog", breed: "GD" }),
  //   React.createElement(Pet, { name: "Candy", animal: "Cat", breed: "DS" }),
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Oliver" animal="Dog" breed="GD" />
      <Pet name="Candy" animal="Cat" breed="DS" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
