import React from 'react';

const NoImages = () => {
    return (
        <article style={{marginTop: '50px'}}>
            <i>
                No images are found, images are from {' '}
            </i>
            <a href={"https://unsplash.com/"}>
                Unsplash
            </a>
        </article>
    );
};

export default NoImages;