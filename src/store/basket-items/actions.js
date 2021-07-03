import types from "./types";
import * as api from '../../api/index';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.getPosts();

        dispatch({type: types.FETCH_ITEMS, payload: data});
    } catch (error) {
        console.log(error.message)
    }
};

export const getCategories = () => async (dispatch) => {
    try {
        const {data} = await api.getCategories();
        dispatch({type: types.FETCH_CATEGORIES, payload: data});
    } catch (error) {
        console.log(error.message)
    }
};

export const addItemToBasket = (item) => {
    return {
        type: types.ADD_ITEM_TO_BASKET,
        payload: item
    };
};

export const removeItemFromBasket = (item) => {
    return {
        type: types.REMOVE_ITEM_FROM_BASKET,
        payload: item
    };
};

export const changeDelivery = (isDelivered) => {
    return {
        type: types.CHANGE_DELIVERY,
        payload: isDelivered
    }
};

export const emptyBasket = () => {
    return {
        type: types.EMPTY_BASKET
    }
};

export const sendToBack = () => {
    return {
        type: types.SEND_TO_BACK
    }
};


