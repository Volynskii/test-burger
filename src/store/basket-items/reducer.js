import  types from "./types";
import {findDuplicate} from "../../helpers/findDuplicate";
import catalogItems from "../../mocks/catalog-items-mock";

const initialState = {
    catalogItems: catalogItems,
    basketItems: catalogItems,
    currentTotalPrice: '',
    delivery: true,
};


const  MutateData = (fetchedItems) => {
    for (let object of fetchedItems) {
object.id = object._id
        object.itemQuantity = 0
    }
     return fetchedItems;
};

export const basketItemsReducer = (state = initialState,{type,payload}) => {

    switch (type) {

        case types.FETCH_ALL:

            return {
                ...state,
                catalogItems: MutateData(payload),
                basketItems: MutateData(payload),
            }

        case types.ADD_ITEM_TO_BASKET:
            return {
                ...state,
                basketItems: findDuplicate(state.basketItems,payload,"+")
            };

        case types.REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                basketItems: findDuplicate(state.basketItems,payload,"-")
            };


        case types.CHANGE_DELIVERY: {
            return {
                ...state,
                delivery: payload
            }
        }

        default:
            return state;
    }
};
