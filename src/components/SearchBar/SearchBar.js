import React, {useState, useEffect} from 'react';
import Unsplash from "../../utils/Unsplash";
import "./SearchBar.scss";
import {addImages, addQuery, startLoader, stopLoader} from "../../store/actions"
import {useDispatch} from "react-redux";
import uuid from "uuid/v1"

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    const saveQuery = () => {
        dispatch(addQuery(keyword))
    };
    const fetchApi = () => {
        let id = uuid();
        dispatch(startLoader(id));
        Unsplash
            .fetch(keyword)
            .then(results => {
                setResults(results);
                dispatch(stopLoader(id));
            });
    };

    useEffect(() => {
        dispatch(addImages(results))
    }, [dispatch, results]);

    return (
        <section className="search-bar">
            <input type="text" value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
            <button onClick={fetchApi}>Search</button>
            <button onClick={saveQuery}>Save</button>
        </section>
    );
};

export default SearchBar;