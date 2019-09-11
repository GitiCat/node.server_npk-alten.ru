import {combineReducers} from "redux";
import LanguageReducer from "./reducers-language";
import HomeReducer from "./home-reducers";
import LifeCycleReducer from "./lifecycle-reducer";
import PagesReducer from "./pages-reducers";

const allReducers = combineReducers({
    LanguageReducer,
    HomeReducer,
    PagesReducer,
    LifeCycleReducer,
});

export default allReducers;