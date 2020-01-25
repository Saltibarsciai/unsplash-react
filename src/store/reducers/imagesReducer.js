const imagesReducer = (state = {}, action) => {
    switch (action.type) {
        case "addImages":
            return {...action.newState};
        default:
            return state;
    }
};
export default imagesReducer;