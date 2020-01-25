const imagesReducer = (state = { empty: 'no results...'}, action) => {
    switch (action.type) {
        case "addImages":
            console.log(state);
            return {...action.newState};
        default:
            return state;
    }
};
export default imagesReducer;