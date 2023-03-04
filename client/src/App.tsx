import { useConversionCanvas } from '@components/ConversionCanvas/useConversionCanvas';
import FileInput from '@components/FileInput/FileInput';
import { Button, Input } from '@hover-design/react';
import { getImageMetaData } from '@services/image-process';
import { FitMethod } from '@services/useSqoosh/types';
import { useSquoosh } from '@services/useSqoosh/useSqoosh';

import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import * as styles from './App.css';

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const opts = {
        resizeOpts: { width: 300, height: 300, fitMethod: FitMethod.Contain }
    };

    const { squooshFile, loading, imgSrcPreview, file } = useSquoosh();

    const onChangeImage = () => {
        const files = inputRef.current?.files || [];
        if (files[0]) {
            squooshFile(files[0], opts);
        }
    };

    useEffect(() => {
        if (file) {
            // Do something with the compressed file
            console.log(file);
        }
    }, [file]);
    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                {/* <FileInput onChange={handleFileInput} /> */}
                <input
                    ref={inputRef}
                    accept="image/*"
                    type="file"
                    onChange={onChangeImage}
                />
                {imgSrcPreview && <img src={imgSrcPreview} alt="Preview" />}
            </div>
            <div className={styles.ActionBtnsSection}>
                <Button>Convert To</Button>
                <Button>Compress</Button>
                <Button>Resize</Button>
            </div>
            {/* <img ref={imageRef} />; */}
        </div>
    );
}

export default App;
