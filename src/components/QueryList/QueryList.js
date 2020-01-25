import React, {useState} from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import "./QueryList.scss"
import {useSelector, useDispatch} from "react-redux";
import UnsplashFactory from "../../utils/Unsplash";
import {addImages} from "../../store/actions"

const QueryList = () => {
    const [isClosed, setClosed] = useState(true);
    const queryStore = useSelector(state => state.queryReducer);
    const dispatch = useDispatch();

    const dispatchImages = (item) => {
        UnsplashFactory
            .fetch(item)
            .then( results => dispatch(addImages(results)));
    };

    const queryList = () => {
        return (
            queryStore.map((item, index) => (
                <li key={index} onClick={ () => dispatchImages(item)}>
                    {item}
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