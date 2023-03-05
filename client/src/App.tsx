import ConvertToSelect from '@components/ConverToSelect/ConvertToSelect';
import FileInput from '@components/FileInput/FileInput';
import ImagePreview from '@components/ImagePreview/ImagePreview';
import RangeSlider from '@components/RangeSlider/RangeSlider';
import { Button } from '@hover-design/react';
import { ImagesContextCore } from '@store/ImagesContext';
import { useCallback, useContext } from 'react';
import * as styles from './App.css';
import { IImagesArray } from './App.types';
import { useImageTools } from './useImageTools';

function App() {
    const {
        onDrop,
        onChangeConvertTo,
        convertTo,
        qualityRangeValue,
        setQualityRangeValue,
        batchConvert,
        imageTagRef,
        images
    } = useImageTools();

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                {/* @ts-ignore */}
                {images.length ? <FileInput onDrop={onDrop} /> : null}
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
                        <ImagePreview />
                    ) : (
                        // @ts-ignore
                        <FileInput onDrop={onDrop} />
                    )}
                </div>
                <Button className={styles.ConvertToBtn} onClick={batchConvert}>
                    Convert
                </Button>

                <div style={{ display: 'none' }}>
                    <img ref={imageTagRef} />
                </div>
            </div>
        </div>
    );
}

export default App;
