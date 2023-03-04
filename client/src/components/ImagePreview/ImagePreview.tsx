import { Flex } from '@hover-design/react';
import { ImagesContextCore } from '@store/ImagesContext';
import React, { useContext } from 'react';
import { PreviewContainer, PreviewImg } from './ImagePreview.css';

const ImagePreview = () => {
    const { images } = useContext(ImagesContextCore);
    console.log(images, 'preview');

    return (
        <>
            {images.map((img, idx) => (
                <Flex
                    className={PreviewContainer}
                    gap="20px"
                    key={idx}
                    alignItems="center"
                >
                    <div>
                        <img
                            className={PreviewImg}
                            src={img.src}
                            alt="preview"
                        />
                    </div>
                    <Flex flexDirection="column" gap={10}>
                        <h5>{img.name}</h5>
                        <h6>{img.size}</h6>
                    </Flex>
                </Flex>
            ))}
        </>
    );
};

export default ImagePreview;
