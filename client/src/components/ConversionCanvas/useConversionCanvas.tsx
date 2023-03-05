import { useRef, useState } from 'react';

enum formatType {
    'webp',
    'jpeg',
    'png'
}

export const useConversionCanvas = (onConversion: any) => {
    const imageRef = useRef<HTMLImageElement>(null);

    const [convertedImage, setConvertedImage] = useState('');
    const convertImage = async ({
        format,
        quality
    }: {
        canvasRef: React.RefObject<HTMLImageElement>;
        format: formatType;
        quality: any;
    }) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imageRef.current.naturalWidth;
        canvas.height = imageRef.current.naturalHeight;
        ctx!.drawImage(imageRef.current as unknown as CanvasImageSource, 0, 0);
        // setConvertedImage(canvas.toDataURL(`image/${format}`, quality));
        const convertedImage = canvas.toDataURL(`image/${format}`, quality);
        setConvertedImage((prev) => {
            debugger;
            onConversion(convertedImage);
        });

        // setConvertedImage(onConversion(convertedImage));
    };

    return {
        imageRef,
        convertImage,
        convertedImage
    };
};
