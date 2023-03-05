import { downloadB64Image } from '@components/ConversionCanvas/downloadB64Image';
import { ImagesContextCore } from '@store/ImagesContext';
import { resolve } from 'path';
import React, { useCallback, useContext, useState } from 'react';
import { IAcceptedFiles, IImagesArray } from './App.types';
import { imageMimeMap } from './constants';

export const useImageTools = () => {
    const [convertTo, setConvertTo] = useState('');
    const [qualityRangeValue, setQualityRangeValue] = useState(0);
    const imageTagRef = React.useRef<HTMLImageElement>(null);

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
    const handleConvertAction = (imageData: IAcceptedFiles) => {
        return new Promise((resolve, reject) => {
            try {
                let img = imageTagRef.current;
                imageTagRef.current.src = imageData.src;
                let canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const b64Image = canvas.toDataURL(
                    imageMimeMap[convertTo.value]
                );
                const imageName = imageData.name.split('.');
                imageName.splice(-1);
                downloadB64Image(
                    b64Image,
                    `${imageName.join('')}.${convertTo.value}`
                );
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };
    const batchConvert = async () => {
        // images.map((image) => {
        //     await handleConvertAction(image);
        // });
        await images.reduce(async (memo, v) => {
            const results = await memo;
            await handleConvertAction(v);
        }, []);
    };

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
        setQualityRangeValue,
        handleConvertAction,
        imageTagRef,
        batchConvert
    };
};
