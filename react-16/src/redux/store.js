import { createStore } from "redux";
import { messageReducer } from "./message/message.reducer";
let store = createStore(messageReducer);
export { store };
