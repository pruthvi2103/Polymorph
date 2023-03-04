import sharp from 'sharp';
// import { Buffer } from 'node:buffer';
import path from 'path';

export const getMetdata = async (img_buffer: Buffer) => {
    // const filepath: string = path.join(__dirname, '..', 'src/tmp/test.png');
    // const data = await sharp(filepath).toBuffer();

    const metadata = await sharp(img_buffer).metadata();
    console.log({ metadata });
};

// const { data, info } = await sharp('my-image.jpg', {})
