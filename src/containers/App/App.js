import React from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import QueryList from "../../components/QueryList/QueryList";
import ImagesContainer from "../../components/ImagesContainer/ImagesContainer";
import { ProgressBarProvider } from 'react-redux-progress';
import { connect } from 'react-redux';
import "./App.scss"

const App = ({ isProgressActive}) => (
            <div className="App">
                <ProgressBarProvider isActive={isProgressActive} color="#db7093" />
                <SearchBar/>
                <QueryList/>
                <ImagesContainer/>
            </div>);

export default connect(
    state => ({ isProgressActive: state.progress.isActive })
)(App)
