const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case "REPLACE_IMAGES":
            if(action.newState.length<1){
                alert("No images found")
            }
            return [...action.newState];
        default:
            return state;
    }
};
export default imagesReducer;