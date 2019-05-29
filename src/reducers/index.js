import {combineReducers} from "redux";
import LanguageReducer from "./reducers-language";
import HomeReducer from "./home-reducers";
import LifeCycleReducer from "./lifecycle-reducer";

const allReducers = combineReducers({
    LanguageReducer,
    HomeReducer,
    LifeCycleReducer
});

export default allReducers;