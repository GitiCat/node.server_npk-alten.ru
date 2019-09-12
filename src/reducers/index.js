import {combineReducers} from "redux";
import LanguageReducer from "./reducers-language";
import HomeReducer from "./home-reducers";
import LifeCycleReducer from "./lifecycle-reducer";
import PagesReducer from "./pages-reducers";
import ProductsReducer from "./products-reducer"
import NewsReducer from './news-reducer'

const allReducers = combineReducers({
    LanguageReducer,
    HomeReducer,
    PagesReducer,
    LifeCycleReducer,
    ProductsReducer,
    NewsReducer,
});

export default allReducers;