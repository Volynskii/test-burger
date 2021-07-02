export const findDuplicate = (state,payload,typeOfOperation) => {
console.log('payload',payload)
    const sign = typeOfOperation === "+";
    const stateIds = state.map((it) => {
        return it.id;
    });
    const isIncluded = stateIds.includes(payload);
    const findDuplicate = (payload) => {

         // var foundIndex = state.findIndex((item) => item.id === payload);
        sign ? (state[payload].itemQuantity = state[payload].itemQuantity + 1) :
            state[payload].itemQuantity = state[payload].itemQuantity - 1

    };

    if (isIncluded) {
        findDuplicate(payload);
        return ([...state])
    }

    return state;
};
