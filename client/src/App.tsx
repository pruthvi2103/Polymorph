import ConvertToSelect from '@components/ConverToSelect/ConvertToSelect';
import FileInput from '@components/FileInput/FileInput';
import ImagePreview from '@components/ImagePreview/ImagePreview';
import Navbar from '@components/Navbar/Navbar';
import { useImageTools } from '@hooks/useImageTools';
import { Button, Flex, Input, Label } from '@hover-design/react';
import * as styles from './App.css';

function App() {
    const {
        onDrop,
        onChangeConvertTo,
        convertTo,
        qualityRangeValue,
        setQualityRangeValue,
        batchConvert,
        batchResize,
        imageTagRef,
        images,
        resizeHeight,
        resizeWidth,
        setResizeWidth,
        setResizeHeight
    } = useImageTools();

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.Logo}>
                <Navbar />
            </div>
            <div className={styles.FileInputSection}>
                {/* @ts-ignore */}
                {images.length ? (
                    <FileInput onDrop={onDrop} isUploadMore />
                ) : null}
            </div>
            <div className={styles.ActionBtnsSection}>
                <ConvertToSelect
                    value={convertTo}
                    changeHandler={onChangeConvertTo}
                />
                {/* <RangeSlider
                    value={qualityRangeValue}
                    onChangeHandler={(e) =>
                        setQualityRangeValue(e.target.value)
                    }
                /> */}
                <div className={styles.PreviewImgGrid}>
                    {images.length ? (
                        <div>
                            <ImagePreview />
                        </div>
                    ) : (
                        // @ts-ignore
                        <FileInput onDrop={onDrop} />
                    )}
                </div>
                <Button className={styles.ConvertToBtn} onClick={batchConvert}>
                    Convert
                </Button>
                <Flex gap={'12px'} alignItems={'baseline'}>
                    <Label htmlFor="width-input">
                        <span>Width</span>
                    </Label>
                    <Input
                        value={resizeWidth}
                        type="number"
                        onChange={(e) => {
                            setResizeWidth(e.target.value as unknown as number);
                        }}
                        id="width-input"
                    ></Input>

                    <Label htmlFor="height-input">
                        <span>Height</span>
                    </Label>
                    <Input
                        value={resizeHeight}
                        type="number"
                        onChange={(e) => {
                            setResizeHeight(
                                e.target.value as unknown as number
                            );
                        }}
                        id="height-input"
                    ></Input>
                </Flex>
                <Button className={styles.ConvertToBtn} onClick={batchResize}>
                    Resize & Convert
                </Button>
                <div style={{ display: 'none' }}>
                    <img ref={imageTagRef} />
                </div>
            </div>
        </div>
    );
}

export default App;
