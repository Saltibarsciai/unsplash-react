import React, {useState, useEffect} from 'react';
import Unsplash from "../../utils/Unsplash";
import uuid from "uuid/v1"
import {addQuery, replaceImages, startLoader, stopLoader} from "../../store/actions"
import {useDispatch} from "react-redux";
import "./SearchBar.scss";

const SearchBar = () => {
    const [keyword, setKeyword] = useState([]);
    const [results, setResults] = useState([]);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const dispatch = useDispatch();

    const saveQuery = () => {
        dispatch(addQuery(keyword));
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
        if(isFirstRender) {
            return setIsFirstRender(false);
        }
        dispatch(replaceImages(results));
    }, [results]);

    return (
        <section className="search-bar">
            <input type="text" value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
            <button onClick={fetchApi}>Search</button>
            <button onClick={saveQuery}>Save</button>
        </section>
    );
};

export default SearchBar;