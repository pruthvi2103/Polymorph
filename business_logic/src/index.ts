import sharp from 'sharp';

export const getMetadata = async (img_buffer: Buffer) => {
    return sharp(img_buffer).metadata();
};
