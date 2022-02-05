import { createStore } from "redux";

let initialState = {
  Pool: [],
};

function reducer(state = {}, action) {
  console.log(action.type);

  switch (action.type) {
    case "SET_POOL":
      return {
        ...state,
        Pool: action.Pool,
      };
    case "SET_LEDGER":
      return {
        ...state,
        Ledger: action.Ledger,
      };

    default:
      console.log("Invalid Dispatch");
      break;
  }
}

let store = createStore(reducer);
export default store;
