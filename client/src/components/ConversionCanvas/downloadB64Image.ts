import { imageMimeMap } from 'src/constants';

export const downloadB64Image = (b64Data: string, fileName: string) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = b64Data;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const convertPNGToFormat = (format) => {
    let img = imageTagRef.current;
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const b64Image = canvas.toDataURL(imageMimeMap[format]);
    downloadB64Image(b64Image, `converted-image.${format}`);
    // Now the image is a webp...
};
