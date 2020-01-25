const queryReducer = (state = [], action) => {
    switch (action.type) {
        case "addQuery":
            return [...state, action.query];
        default:
            return state;
    }
};
export default queryReducer;