import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState
} from 'react';
import {
    IAcceptedFiles,
    IAcceptedFilesMetaData,
    IImagesArray
} from 'src/App.types';

interface TImageContextProps {
    children: JSX.Element;
}

export interface TImagesContext {
    images: IImagesArray[];
    setImages: Dispatch<SetStateAction<IImagesArray[]>>;
    imagesMetaData: IAcceptedFilesMetaData[];
    setImagesMetaData: Dispatch<SetStateAction<IAcceptedFilesMetaData[]>>;
    mergedImagesData: (IAcceptedFiles & IAcceptedFilesMetaData)[];
}

export const ImagesContextCore = createContext<TImagesContext>({
    images: [],
    setImages: () => {},
    imagesMetaData: [],
    setImagesMetaData: () => {},
    mergedImagesData: []
});

const ImagesContext = ({ children }: TImageContextProps) => {
    const [images, setImages] = useState<IImagesArray[]>([]);
    const [imagesMetaData, setImagesMetaData] = useState<
        IAcceptedFilesMetaData[]
    >([]);
    const [mergedImagesData, setMergedImagesData] = useState<
        TImagesContext['mergedImagesData']
    >([]);
    // const arr1 = images;
    // const arr2 = imagesMetaData;
    // const merged = arr2.map((value, index) => {
    //     return Object.assign(value, arr1[index]);
    // });
    // setMergedImagesData(merged);

    return (
        <ImagesContextCore.Provider
            value={{
                images,
                setImages,
                imagesMetaData,
                setImagesMetaData,
                mergedImagesData
            }}
        >
            {children}
        </ImagesContextCore.Provider>
    );
};

export default ImagesContext;
