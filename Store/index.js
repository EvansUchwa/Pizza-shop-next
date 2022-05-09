import { combineReducers, compose } from "redux";
import { createStore } from "redux";
import { authReducer } from "./reducers/authReducers";
import { axiosReducer } from "./reducers/axiosReducer";
import cartReducer from "./reducers/cartReducer";
import modalReducer from "./reducers/modalReducer";

let composeEnhancers = compose;

if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__();
}
const store = createStore(combineReducers(
    {
        auth: authReducer, axiosDefault: axiosReducer,
        modal: modalReducer,
        cart: cartReducer
    }
), composeEnhancers)


// store.subscribe(() => console.log(store.getState()))
export default store;