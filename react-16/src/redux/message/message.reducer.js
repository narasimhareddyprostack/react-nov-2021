import { GM, GN } from "./message.action";
let initialState = {
  message: "Hello",
};
let messageReducer = (state = initialState, action) => {
  console.log("inside message Reducer");
  console.log(action.type);
  switch (action.type) {
    case GM:
      return { message: "Good Morning" };
    case GN:
      return { message: "Good Night" };
    default:
      return state;
  }
};
export { messageReducer };
