import React from 'react';

import {useSelector, useDispatch} from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./App.scss"
import QueryList from "../../components/QueryList/QueryList";
import ImagesContainer from "../../components/ImagesContainer/ImagesContainer";

function App() {
  const imagesStore = useSelector(state => state.imagesReducer);

  return (
    <div className="App">
      <SearchBar/>
      <QueryList/>
      <ImagesContainer/>
    </div>
  );
}

export default App;
