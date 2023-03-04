import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState
} from 'react';
import { IAcceptedFiles, IAcceptedFilesMetaData } from 'src/App.types';

interface TImageContextProps {
    children: JSX.Element;
}

export interface TImagesContext {
    images: IAcceptedFiles[];
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
