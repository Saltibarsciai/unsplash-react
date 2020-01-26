import React from 'react';
import NoImages from "./NoImages/NoImages";
import {useSelector} from "react-redux";
import "./ImagesContainer.scss"

const ImagesContainer = () => {
    const imagesStore = useSelector(state => state.imagesReducer);

    const renderImages = () => {
        if (imagesStore.length===0) return <NoImages/>;
        return imagesStore.map((item, index) => (
            <a href={item.links.html}>
                <img key={index} src={item.urls.small} alt={item.alt_description}/>
                <div className="overlay">
                    image by <b>{item.user.username}</b> from <i>Unsplash</i>
                </div>
            </a>
        ))
    };

    return (
        <main className="images-container">
            {renderImages()}
        </main>
    );
};

export default ImagesContainer;