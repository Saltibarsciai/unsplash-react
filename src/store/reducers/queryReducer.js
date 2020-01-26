const queryReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUERY":
            return [...state, action.query];
        default:
            return state;
    }
};
export default queryReducer;