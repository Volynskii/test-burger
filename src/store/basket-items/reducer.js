import  types from "./types";
import {findDuplicate} from "../../helpers/findDuplicate";

const initialState = {
    catalogItems: [],
    basketItems: [],
    delivery: true,
    categories: [],
    sendToBack: false
};


const  MutateData = (fetchedItems) => {
    for (let object of fetchedItems) {
        object.itemQuantity = 0
    }
     return fetchedItems;
};

export const basketItemsReducer = (state = initialState,{type,payload}) => {
// console.log('state',state)
    switch (type) {
        case types.FETCH_ITEMS:
            return {
                ...state,
                catalogItems: MutateData(payload),
                   // basketItems: MutateData(payload),
            };
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case types.ADD_ITEM_TO_BASKET:
            return {
                ...state,
                  catalogItems: findDuplicate(state.catalogItems,payload,"+"),
                   basketItems: findDuplicate(state.basketItems,payload,"+")

            };
        case types.REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                catalogItems: findDuplicate(state.catalogItems,payload,"-"),
                basketItems: findDuplicate(state.basketItems,payload,"-")
            };
        case types.CHANGE_DELIVERY: {
            return {
                ...state,
                delivery: payload
            }
        }
        case types.EMPTY_BASKET: {
            return {
                ...state,
                basketItems: MutateData(state.basketItems)
            }
        }
        case types.SEND_TO_BACK: {
            return {
                ...state,
                sendToBack: !state.sendToBack
            }
        }
        default:
            return state;
    }
};
