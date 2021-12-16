import { createStore } from "redux";
//import { messageReducer } from "./message/message.reducer";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
let store = createStore(rootReducer, composeWithDevTools());
export { store };
