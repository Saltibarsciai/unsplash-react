import React, {useState} from "react";
import Unsplash from "../../utils/Unsplash";
import {SlideDown} from "react-slidedown";
import {useSelector, useDispatch} from "react-redux";
import {replaceImages, startLoader, stopLoader} from "../../store/actions";
import "react-slidedown/lib/slidedown.css";
import "./QueryList.scss";

const QueryList = () => {
    const [isClosed, setClosed] = useState(true);
    const queryStore = useSelector(state => state.queryReducer);
    const dispatch = useDispatch();

    const fetchApi = (keywords) => {
        let id = "upload-images";
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
        <section data-testid={"query-list"} className={"query-list"}>
            <button onClick={() => setClosed(!isClosed)}>
                Show saved queries
            </button>
            {/*test doesn't find prop - closed, had top put Closed also */}
            <SlideDown closed={isClosed} Closed={isClosed} className="slider" >
                {renderList()}
            </SlideDown>
        </section>
    );
};

export default QueryList;