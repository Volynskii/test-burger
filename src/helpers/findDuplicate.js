export const findDuplicate = (state,payload,typeOfOperation) => {
 console.log('payload',payload)
//     console.log('state',state)
    const sign = typeOfOperation === "+";
    const stateIds = state.map((it) => {
        return it._id;
    });

    const isIncluded = stateIds.includes(payload._id);
    const findDuplicate = (payload) => {
        var foundIndex = state.findIndex((item) => item._id === payload);
        sign ? (state[foundIndex].itemQuantity = state[foundIndex].itemQuantity + 1) :
            state[foundIndex].itemQuantity = state[foundIndex].itemQuantity - 1;

        if(state[foundIndex].itemQuantity === 0) {
            // console.log('i am here!')
            // state.filter(item => item._id !== payload)
            // console.log('state',state)
          return   state.filter(item => payload !== item._id);

        }
    };

    if (isIncluded) {
        findDuplicate(payload._id);
        return ([...state])
    }

    else if(isIncluded === false) {
        return (
            [
                ...state,
                {
                    delivery: payload.delivery,
                    img: payload.img,
                    itemQuantity: payload.itemQuantity,
                    name: payload.name,
                    price: payload.price,
                    _id: payload._id
                }
            ]
        );
    }

};
