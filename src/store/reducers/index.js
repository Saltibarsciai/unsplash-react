import imagesReducer from "./imagesReducer";
import queryReducer from "./queryReducer";
import error from "./errorReducer";
import progress from 'react-redux-progress/reducer'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    imagesReducer,
    queryReducer,
    error,
    progress
});

export default allReducers;