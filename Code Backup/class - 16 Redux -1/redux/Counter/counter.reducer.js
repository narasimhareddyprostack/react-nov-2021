import { INCR, DECR } from "./counter.action";
let initialState = {
  counter: 0,
};
let counterReducer = (state = initialState, action) => {
  console.log("Test 123", action.type);
  switch (action.type) {
   
    case INCR:
      console.log("Hello, come to desk")
      return { counter: state.counter + 1 };
    case DECR:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export { counterReducer };
