import React from "react";
import "./App.css";
import expect from "expect";
// import { createStore } from "redux";

const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});
  return { getState, dispatch, subscribe };
};

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

// console.log(store.getState());
// store.dispatch({ type: "INCREMENT" });
// console.log(store.getState());
const Counter = ({ value }) => <h1>{value}</h1>;
const render = () => {
  document.querySelector("#root") = store.getState();
  console.log(store.getState());
};

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

function App() {
  return (
    <div>
      <Counter value={store.getState()} />
    </div>
  );
}

export default App;
