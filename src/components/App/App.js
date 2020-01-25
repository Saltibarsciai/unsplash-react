import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addImages, addQuery} from "../../actions/index"

function App() {
  const imagesStore = useSelector(state => state.imagesReducer);
  const queryStore = useSelector(state => state.queryReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Hi {imagesStore.empty} {queryStore[0]}
      <button onClick={() => dispatch(addImages({empty: "full"}))}>click</button>
      <button onClick={() => dispatch(addQuery("Hasta la viva"))}>query</button>
    </div>
  );
}

export default App;
