const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case "REPLACE_ERROR":
            return [...action.error];
        default:
            return state;
    }
};
export default imagesReducer;