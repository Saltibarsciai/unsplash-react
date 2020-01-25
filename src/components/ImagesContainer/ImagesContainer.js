import React from 'react';
import "./ImagesContainer.scss"
import logo from "../../invega.jpg"

const ImagesContainer = () => {
    return (
        <main className="images-container">
            <img src={logo} alt="placeholder"/>
            <img src={logo} alt="placeholder"/>
            <img src={logo} alt="placeholder"/>
            <img src={logo} alt="placeholder"/>
            <img src={logo} alt="placeholder"/>
            <img src={logo} alt="placeholder"/>
        </main>
    );
};

export default ImagesContainer;