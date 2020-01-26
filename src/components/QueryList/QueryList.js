import React, {useState} from 'react';
import 'react-slidedown/lib/slidedown.css'
import Unsplash from "../../utils/Unsplash";
import uuid from "uuid/v1"
import {SlideDown} from 'react-slidedown'
import {useSelector, useDispatch} from "react-redux";
import {replaceImages, startLoader, stopLoader} from "../../store/actions"
import "./QueryList.scss"

const QueryList = () => {
    const [isClosed, setClosed] = useState(true);
    const queryStore = useSelector(state => state.queryReducer);
    const dispatch = useDispatch();

    const fetchApi = (keywords) => {
        let id = uuid();
        dispatch(startLoader(id));
        Unsplash
            .fetch(keywords)
            .then( results => {
                dispatch(replaceImages(results));
                dispatch(stopLoader(id));
            });
    };

    const renderList = () => {
        return (
            queryStore.map((keywords, index) => (
                <li key={index} onClick={ () => fetchApi(keywords)}>
                    {keywords}
                </li>
            ))
        )
    };

    return (
        <section className={"query-list"}>
            <button onClick={() => setClosed(!isClosed)}>
                Show saved queries
            </button>
            <SlideDown className="slider" closed={isClosed}>
                {renderList()}
            </SlideDown>
        </section>
    );
};

export default QueryList;