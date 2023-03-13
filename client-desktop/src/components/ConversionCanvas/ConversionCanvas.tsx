import React from 'react';
import { useConversionCanvas } from './useConversionCanvas';

const ConversionCanvas = ({ imgSrc }: { imgSrc: string }) => {
    const onConversion = (img: string) => {
        console.log(img);
    };
    const { convertImage, convertedImage, imageRef } =
        useConversionCanvas(onConversion);
    return <img ref={imageRef} src={imgSrc} />;
};

export default ConversionCanvas;
