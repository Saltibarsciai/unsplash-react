import React, {useState} from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import "./QueryList.scss"
import {useSelector, useDispatch} from "react-redux";
import UnsplashFactory from "../../utils/Unsplash";
import {addImages, startLoader, stopLoader} from "../../store/actions"

const QueryList = () => {
    const [isClosed, setClosed] = useState(true);
    const queryStore = useSelector(state => state.queryReducer);
    const dispatch = useDispatch();

    const fetchApi = (keywords) => {
        dispatch(startLoader('fetchApi2'));
        UnsplashFactory
            .fetch(keywords)
            .then( results => {
                dispatch(addImages(results));
                dispatch(stopLoader('fetchApi2'));
            });
    };

    const queryList = () => {
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
                {queryList()}
            </SlideDown>
        </section>
    );
};

export default QueryList;