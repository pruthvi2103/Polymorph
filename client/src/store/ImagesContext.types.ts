import { Dispatch, SetStateAction } from 'react';
import { IImagesArray } from 'src/App.types';

export interface TImageContextProps {
    children: JSX.Element;
}

export interface TImagesContext {
    images: IImagesArray[];
    setImages: Dispatch<SetStateAction<IImagesArray[]>>;
    deleteImg: (id) => void;
}
