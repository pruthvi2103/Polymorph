import { useConversionCanvas } from '@components/ConversionCanvas/useConversionCanvas';
import FileInput from '@components/FileInput/FileInput';
import { Button, Input } from '@hover-design/react';
import { getImageMetaData } from '@services/image-process';
import { useJimpImage } from '@services/jimp-service/useJimpImage';
import { ChangeEventHandler, useState } from 'react';
import * as styles from './App.css';

function App() {
    const [fileMeta, setFileMetaData] = useState(null);
    const onConversion = (img: string) => {
        console.log(img);
    };
    const { convertImage, convertedImage, imageRef } =
        useConversionCanvas(onConversion);
    const { loadImage } = useJimpImage();
    const getBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const handleFileInput: ChangeEventHandler<HTMLInputElement> = async (e) => {
        if (e?.currentTarget?.files?.length) {
            const file = e.currentTarget.files[0];
            const data = await getImageMetaData(file);
            loadImage(file);
            // const imageB64 = await getBase64(file);
            // // imageRef.current.src = imageB64 as string;
            // // convertImage({
            // //     canvasRef: imageRef,
            // //     format: 'webp',
            // //     quality: 0.5
            // // });
        }
    };
    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                <FileInput onChange={handleFileInput} />
            </div>
            <div className={styles.ActionBtnsSection}>
                <Button>Convert To</Button>
                <Button>Compress</Button>
                <Button>Resize</Button>
            </div>
            <img ref={imageRef} />;
        </div>
    );
}

export default App;
