import { Button, Flex } from '@hover-design/react';
import { ImagesContextCore } from '@store/ImagesContext';
import React, { useContext } from 'react';
import { DeleteBtn, PreviewContainer, PreviewImg } from './ImagePreview.css';

const ImagePreview = () => {
    const { images, deleteImg } = useContext(ImagesContextCore);

    const convertSizeToKB = (size: number) => {
        return (size / 1024).toFixed(0);
    };
    return (
        <Flex gap="15px" className={PreviewContainer}>
            <Flex flexDirection="column" gap="15px" flexGrow="1" flexBasis="1">
                {images.map((img, idx) =>
                    idx % 2 === 0 ? (
                        <Flex
                            className={PreviewContainer}
                            key={img.id}
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Button
                                onClick={(id) => deleteImg(img.id)}
                                className={DeleteBtn}
                                variant="hallow"
                            >
                                🗑️
                            </Button>
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
                    ) : null
                )}
            </Flex>
            <Flex flexDirection="column" gap="15px" flexGrow="1" flexBasis="1">
                {images.map((img, idx) =>
                    idx % 2 === 0 ? null : (
                        <Flex
                            className={PreviewContainer}
                            key={img.id}
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Button
                                onClick={(id) => deleteImg(img.id)}
                                className={DeleteBtn}
                                variant="hallow"
                            >
                                🗑️
                            </Button>
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
                    )
                )}
            </Flex>
        </Flex>
    );
};

export default ImagePreview;
