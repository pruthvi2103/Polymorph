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

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                {/* <FileInput onChange={handleFileInput} /> */}
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
