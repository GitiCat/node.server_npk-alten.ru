import {combineReducers} from "redux";
import LanguageReducer from "./reducers-language";
import HomeReducer from "./home-reducers";
import LifeCycleReducer from "./lifecycle-reducer";
import ProductionsChangeReducer from "./productions-select-change-reducer";

const allReducers = combineReducers({
    LanguageReducer,
    HomeReducer,
    LifeCycleReducer,
    ProductionsChangeReducer
});

export default allReducers;