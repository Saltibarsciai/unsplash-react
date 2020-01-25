const queryReducer = (state = [], action) => {
    switch (action.type) {
        case "addQuery":
            console.log(state);
            return [...state, action.query];
        default:
            return state;
    }
};
export default queryReducer;