import ConvertToSelect from '@components/ConverToSelect/ConvertToSelect';
import FileInput from '@components/FileInput/FileInput';
import ImagePreview from '@components/ImagePreview/ImagePreview';
import { Button } from '@hover-design/react';
import { ImagesContextCore } from '@store/ImagesContext';
import { useCallback, useContext } from 'react';
import * as styles from './App.css';
import { IImagesArray } from './App.types';
import { useImageTools } from './useImageTools';

function App() {
    const { onDrop } = useImageTools();

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                <FileInput onDrop={onDrop} />
                <ImagePreview />
            </div>
            <div className={styles.ActionBtnsSection}>
                <ConvertToSelect />
                <Button>Compress</Button>
                <Button>Resize</Button>
            </div>
        </div>
    );
}

export default App;
