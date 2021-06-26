//core
import { combineReducers } from "redux";

//Reducers
import {basketItemsReducer as basketItems} from "./basket-items/reducer";

export const rootReducer = combineReducers({
    basketItems
});


