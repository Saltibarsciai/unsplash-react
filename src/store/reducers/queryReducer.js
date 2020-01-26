const queryReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUERY":
            if(state.includes(action.query)) {
                alert("Already exists");
                return [...state];
            }
            alert("Added");
            return [...state, action.query];
        default:
            return [...state];
    }
};
export default queryReducer;