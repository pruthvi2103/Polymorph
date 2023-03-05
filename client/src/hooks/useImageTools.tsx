import { downloadB64Image } from '@components/ConversionCanvas/downloadB64Image';
import { IFileInput } from '@components/FileInput/FileInput.types';
import { FitMethod } from '@services/useSqoosh/types';
import { useSquoosh } from '@services/useSqoosh/useSqoosh';
import { ImagesContextCore } from '@store/ImagesContext';
import React, { useCallback, useContext, useState } from 'react';
import { IImagesArray } from '../App.types';
import { imageMimeMap } from '../constants';

export const useImageTools = () => {
    const [convertTo, setConvertTo] = useState<{
        label: string;
        value: string;
    }>({
        label: 'WEBP',
        value: 'webp'
    });
    const [resizeWidth, setResizeWidth] = useState(0);
    const [resizeHeight, setResizeHeight] = useState(0);
    const [qualityRangeValue, setQualityRangeValue] = useState(0);
    const imageTagRef = React.useRef<HTMLImageElement>(null);

    const onChangeConvertTo = (e: { label: string; value: string }) => {
        setConvertTo(e);
    };

    const { images, setImages } = useContext(ImagesContextCore);
    const onDrop = useCallback((acceptedFiles: IImagesArray[]) => {
        acceptedFiles.map((file: IImagesArray, index: number) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    {
                        id: crypto.randomUUID(),
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
            return file;
        });
    }, []);
    console.log(images, 'id');

    const handleConvertAndResizeAction = (
        imageData: IImagesArray,
        isResizeAction: boolean
    ) => {
        return new Promise((resolve, reject) => {
            try {
                let img = imageTagRef.current;
                if (img && imageTagRef.current) {
                    imageTagRef.current.src = imageData.src as string;
                    let canvas = document.createElement('canvas');
                    canvas.width = isResizeAction ? resizeWidth : img.width;
                    canvas.height = isResizeAction ? resizeHeight : img.height;
                    let ctx = canvas.getContext('2d');
                    if (ctx) {
                        if (isResizeAction) {
                            ctx.drawImage(img, 0, 0, resizeWidth, resizeHeight);
                            debugger;
                        } else {
                            ctx.drawImage(img, 0, 0);
                        }
                    }
                    const b64Image = canvas.toDataURL(
                        //@ts-ignore
                        imageMimeMap[convertTo.value]
                    );
                    const imageName = imageData.name.split('.');
                    imageName.splice(-1);
                    downloadB64Image(
                        b64Image,
                        `${imageName.join('')}.${convertTo.value}`
                    );
                }

                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };
    const batchConvert = async () => {
        //@ts-ignore
        await images.reduce(async (memo, v) => {
            const results = await memo;
            await handleConvertAndResizeAction(v, false);
        }, []);
    };

    const batchResize = async () => {
        //@ts-ignore
        await images.reduce(async (memo, v) => {
            const results = await memo;
            await handleConvertAndResizeAction(v, true);
        }, []);
    };
    return {
        images,
        setImages,
        ImagesContextCore,
        onDrop,
        convertTo,
        onChangeConvertTo,
        qualityRangeValue,
        setQualityRangeValue,
        handleConvertAndResizeAction,
        imageTagRef,
        batchConvert,
        resizeHeight,
        setResizeHeight,
        resizeWidth,
        setResizeWidth,
        batchResize
    };
};
