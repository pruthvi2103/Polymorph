import FileInput from '@components/FileInput/FileInput';
import { Button } from '@hover-design/react';
import { useCallback, useState } from 'react';
import * as styles from './App.css';
import { IAcceptedFiles } from './App.types';

function App() {
    const [images, setImages] = useState<IAcceptedFiles[]>([]);
    const [imagesData, setImagesData] = useState<IAcceptedFiles[]>([]);
    const onDrop = useCallback((acceptedFiles: IAcceptedFiles[]) => {
        console.log(acceptedFiles, 'accepted');

        acceptedFiles.map((file: IAcceptedFiles, index: number) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    { id: index, src: e.target.result }
                ]);
            };
            reader.readAsDataURL(file);
            setImagesData((prevData) => [...prevData, file]);
            return file;
        });
    }, []);
    console.log(images, 'images');
    console.log(imagesData, 'imgData');

    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                <FileInput onDrop={onDrop} />
                {images.map((img, idx) => (
                    <img src={img.src} alt="img" style={{ width: 30 }} />
                ))}
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
