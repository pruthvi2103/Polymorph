import React, { useState } from 'react';
enum formatType {
    'webp',
    'jpeg',
    'png'
}
const [convertedImage, setConvertedImage] = useState('');
export const convert = async ({
    canvas,
    ctx,
    canvasRef,
    onConversion,
    format,
    quality
}: {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    canvasRef: React.RefObject<HTMLImageElement>;
    onConversion: any;
    format: formatType;
    quality: any;
}) => {
    canvas.width = canvasRef.naturalWidth;
    canvas.height = canvasRef.naturalHeight;
    ctx.drawImage(canvasRef as unknown as CanvasImageSource, 0, 0);
    setConvertedImage(canvas.toDataURL(`image/${format}`, quality));

    setConvertedImage(onConversion(convertedImage));
};
