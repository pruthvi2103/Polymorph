import FileInput from '@components/FileInput/FileInput';
import ImagePreview from '@components/ImagePreview/ImagePreview';
import { Button } from '@hover-design/react';
import { ImagesContextCore } from '@store/ImagesContext';
import { useCallback, useContext } from 'react';
import * as styles from './App.css';
import { IAcceptedFiles } from './App.types';

function App() {
    const { images, setImages, imagesMetaData, setImagesMetaData } =
        useContext(ImagesContextCore);
    const onDrop = useCallback((acceptedFiles: IAcceptedFiles[]) => {
        acceptedFiles.map((file: IAcceptedFiles, index: number) => {
            const reader = new FileReader();

            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    {
                        id: index,
                        src: e.target.result,
                        path: file.path,
                        lastModified: file.lastModified,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        webkitRelativePath: file.webkitRelativePath
                    }
                ]);
            };
            reader.readAsDataURL(file);
            setImagesMetaData((prevData) => [...prevData, file]);
            return file;
        });
    }, []);
    console.log(images, 'data');

    console.log(imagesMetaData, 'meta data');

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                <FileInput onDrop={onDrop} />
                <ImagePreview />
            </div>
            <div className={styles.ActionBtnsSection}>
                <Button>Convert To</Button>
                <Button>Compress</Button>
                <Button>Resize</Button>
            </div>
        </div>
    );
}

export default App;
