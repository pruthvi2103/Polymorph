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
    setImages: Dispatch<SetStateAction<IAcceptedFiles[]>>;
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
    const [images, setImages] = useState<IAcceptedFiles[]>([]);
    const [imagesMetaData, setImagesMetaData] = useState<
        IAcceptedFilesMetaData[]
    >([]);
    const [mergedImagesData, setMergedImagesData] = useState<
        TImagesContext['mergedImagesData']
    >([]);

    return (
        <ImagesContextCore.Provider
            value={{
                // @ts-ignore
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
