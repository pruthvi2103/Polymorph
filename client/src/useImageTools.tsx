import { useCallback, useContext, useRef } from 'react';
import { IAcceptedFiles } from './App.types';

export const useImageTools = () => {
    const { images, setImages, imagesMetaData, setImagesMetaData } =
        useContext(ImagesContextCore);
    const onDrop = useCallback((acceptedFiles: IAcceptedFiles[]) => {
        acceptedFiles.map((file: IAcceptedFiles, index: number) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    {
                        id: index,
                        src: e.target.result,
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
            reader.readAsDataURL(file);
            setImagesMetaData((prevData) => [...prevData, file]);
            return file;
        });
    }, []);
    const imageTagRef = useRef<HTMLImageElement>(null);
    const convertPNGToWebp = () => {
        let img = imageTagRef.current;
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        img.src = canvas.toDataURL('image/jpeg');
        // Now the image is a webp...
    };

    return {
        convertPNGToWebp,
        imageTagRef,
        onDrop,
        images,
        setImages,
        imagesMetaData,
        setImagesMetaData
    };
};
