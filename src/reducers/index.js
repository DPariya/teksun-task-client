import { createStore } from "redux";

const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(cart);
export default store;
