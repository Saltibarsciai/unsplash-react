const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case "REPLACE_IMAGES":
            return [...action.newState];
        default:
            return state;
    }
};
export default imagesReducer;