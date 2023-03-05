import React, { createContext, useState } from 'react';
import { IImagesArray } from 'src/App.types';
import { TImageContextProps, TImagesContext } from './ImagesContext.types';

export const ImagesContextCore = createContext<TImagesContext>({
    images: [],
    setImages: () => {},
    deleteImg: (id) => {}
});

const ImagesContext = ({ children }: TImageContextProps) => {
    const [images, setImages] = useState<IImagesArray[]>([]);

    const deleteImg = (id: string | number) => {
        setImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    return (
        <ImagesContextCore.Provider
            value={{
                images,
                setImages,
                deleteImg
            }}
        >
            {children}
        </ImagesContextCore.Provider>
    );
};

export default ImagesContext;
