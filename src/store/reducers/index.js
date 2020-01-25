import imagesReducer from "./imagesReducer";
import queryReducer from "./queryReducer";
import progress from 'react-redux-progress/reducer'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    imagesReducer,
    queryReducer,
    progress
});

export default allReducers;