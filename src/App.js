import React from "react";
import "./App.css";
import expect from "expect";
import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

expect(counter(0, { type: "INCREMENT" })).toEqual(1);
expect(counter(1, { type: "INCREMENT" })).toEqual(2);
expect(counter(2, { type: "DECREMENT" })).toEqual(1);
expect(counter(1, { type: "DECREMENT" })).toEqual(0);

console.log(store.getState());
// store.dispatch({ type: "INCREMENT" });
// console.log(store.getState());

const render = () => {
  document.querySelector("#root").innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

function App() {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      <h1>Counter</h1>
      <h2 className="display">val</h2>
    </div>
  );
}

export default App;
