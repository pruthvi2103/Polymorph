import { useState } from 'react';
import imageResize from './resize/imageResize';
import { ImageResizeOpts } from './types';
import { decodeImage } from './util/decodeImage';
import { imageOptimize } from './optimize/imageOptimize';
import { OptimizeOptions } from './optimize/mozjpeg_enc.types';

const resizeWasmUrl = `${
    import.meta.env.VITE_PUBLIC_URL
}/wasm/squoosh_resize_bg.wasm`;
const optimizeWasmUrl = `${
    import.meta.env.VITE_PUBLIC_URL
}/wasm/mozjpeg_enc.wasm`;

interface SquooshOptions {
    resizeOpts?: ImageResizeOpts;
    optimizeOpts?: OptimizeOptions;
}

interface IUseSquoosh {
    (): {
        squooshFile: (file: File, opts: SquooshOptions) => void;
        file?: File;
        loading: boolean;
        imgSrcPreview?: string;
    };
}

export const useSquoosh: IUseSquoosh = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<File | undefined>();
    const [imgSrcPreview, setImgSrcPreview] = useState<string | undefined>();
    const squooshFile = (file: File, opts: SquooshOptions): void => {
        setLoading(true);
        (async (): Promise<void> => {
            let image: ImageData;
            // Resize
            if (
                resizeWasmUrl &&
                opts.resizeOpts?.width &&
                opts.resizeOpts?.height
            ) {
                image = await imageResize(resizeWasmUrl, file, opts.resizeOpts);
            } else {
                image = await decodeImage(file);
            }

            if (optimizeWasmUrl) {
                const arrayBuffer = await imageOptimize(
                    optimizeWasmUrl,
                    image,
                    opts.optimizeOpts || {}
                );
                const arrayBufferView = new Uint8Array(arrayBuffer);
                const blob = new Blob([arrayBufferView], {
                    type: 'image/jpeg'
                });
                const fileName = file.name.replace(/\.(.*)$/, '.jpeg');
                const newFile = new File([blob], fileName, {
                    lastModified: file.lastModified,
                    type: 'image/jpeg'
                });
                // Create Preview URL
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL(blob);
                setFile(newFile);
                setImgSrcPreview(imageUrl);
            }
            setLoading(false);
        })();
    };
    return { file, loading, squooshFile, imgSrcPreview };
};
