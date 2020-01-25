import React from 'react';
import "./ImagesContainer.scss"
import {useSelector} from "react-redux";

const ImagesContainer = () => {
    const imagesStore = useSelector(state => state.imagesReducer);
    const renderImages = () => (
        imagesStore.map((item, index) => (
            <img key={index} src={item.urls.regular} alt={item.alt_description}/>
        ))
    );

    return (
        <main className="images-container">
            {renderImages()}
        </main>
    );
};

export default ImagesContainer;