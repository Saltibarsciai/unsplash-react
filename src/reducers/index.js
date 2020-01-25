import imagesReducer from "./imagesReducer";
import queryReducer from "./queryReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    imagesReducer,
    queryReducer
});

export default allReducers;