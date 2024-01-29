//1 store banbo akane ai ta asbe redux theke
// 2 store 2 ta jinis ney (a)reducer (b) middlewer
// but ai khane middelwer ar dorkar nai 
import { createStore } from 'redux'
import counterReducer from "./assets/redux-element/reducers/counterReduces";


const store = createStore(counterReducer);
export default store;