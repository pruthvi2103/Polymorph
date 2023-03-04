import { ImagesContextCore } from '@store/ImagesContext';
import { useCallback, useContext, useState } from 'react';
import { IImagesArray } from './App.types';

export const useImageTools = () => {
    const [convertTo, setConvertTo] = useState('');
    const [qualityRangeValue, setQualityRangeValue] = useState(0);

    const onChangeConvertTo = (e) => {
        setConvertTo(e);
    };

    const { images, setImages, imagesMetaData, setImagesMetaData } =
        useContext(ImagesContextCore);
    const onDrop = useCallback((acceptedFiles: IImagesArray[]) => {
        acceptedFiles.map((file: IImagesArray, index: number) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    {
                        id: index,
                        src: e.target!.result,
                        path: file.path,
                        lastModified: file.lastModified,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        webkitRelativePath: file.webkitRelativePath
                    }
                ]);
            };
            reader.readAsDataURL(file as unknown as Blob);
            setImagesMetaData((prevData) => [...prevData, file]);
            return file;
        });
    }, []);
    // const convertPNGToWebp = () => {
    //     let img = imageTagRef.current;
    //     let canvas = document.createElement('canvas');
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     let ctx = canvas.getContext('2d');
    //     ctx.drawImage(img, 0, 0);
    //     img.src = canvas.toDataURL('image/jpeg');
    //     // Now the image is a webp...
    // };
    console.log(convertTo, 'concert');

    return {
        images,
        setImages,
        imagesMetaData,
        setImagesMetaData,
        ImagesContextCore,
        onDrop,
        convertTo,
        onChangeConvertTo,
        qualityRangeValue,
        setQualityRangeValue
    };
};
