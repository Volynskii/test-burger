export const findDuplicate = (state,payload,typeOfOperation) => {

    const sign = typeOfOperation === "+";
    const stateIds = state.map((it) => {
        return it._id;
    });

    const isIncluded = stateIds.includes(payload);
    const findDuplicate = (payload) => {

        var foundIndex = state.findIndex((item) => item._id === payload);
        
        sign ? (state[foundIndex].itemQuantity = state[foundIndex].itemQuantity + 1) :
            state[foundIndex].itemQuantity = state[foundIndex].itemQuantity - 1

    };

    if (isIncluded) {
        findDuplicate(payload);
        return ([...state])
    }

    return state;
};
