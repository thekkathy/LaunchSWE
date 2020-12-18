import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //basically, this is copying the array of images
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    //for lists of elements, best to include keys in div
    //to make updating lists more efficient
    //(basically, it looks to see if the element is already in DOM w/ keys)
    return (
        <div className='image-list'>{images}</div>
    );
}

export default ImageList;