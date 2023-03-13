import { Flex } from '@hover-design/react';
import { ImagesContextCore } from '../../store/ImagesContext';
import React, { useContext } from 'react';
import { PreviewContainer, PreviewImg } from './ImagePreview.css';

const ImagePreview = () => {
    const { images } = useContext(ImagesContextCore);
    console.log(images, 'preview');
    const convertSizeToKB = (size: number) => {
        return (size / 1024).toFixed(0);
    };
    return (
        <>
            {images.map((img, idx) => (
                <Flex
                    className={PreviewContainer}
                    gap="20px"
                    key={idx}
                    alignItems="center"
                    flexDirection="column"
                >
                    <div>
                        <img
                            className={PreviewImg}
                            src={img.src as string}
                            width={'100%'}
                            alt="preview"
                        />
                    </div>
                    <Flex flexDirection="column" gap={10}>
                        <h5>{img.name}</h5>
                        <h6>{convertSizeToKB(img.size)} KB</h6>
                    </Flex>
                </Flex>
            ))}
        </>
    );
};

export default ImagePreview;
