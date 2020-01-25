import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import "./App.scss"
import QueryList from "../../components/QueryList/QueryList";
import ImagesContainer from "../../components/ImagesContainer/ImagesContainer";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <QueryList/>
      <ImagesContainer/>
    </div>
  );
}

export default App;
