import FileInput from '@components/FileInput/FileInput';
import { Button, Input } from '@hover-design/react';
import { getImageMetaData } from '@services/image-process';
import { ChangeEventHandler, useState } from 'react';
import * as styles from './App.css';

function App() {
    const [fileMeta, setFileMetaData] = useState(null);
    const handleFileInput: ChangeEventHandler<HTMLInputElement> = async (e) => {
        if (e?.currentTarget?.files?.length) {
            const data = await getImageMetaData(e.currentTarget.files[0]);
            console.log(data);
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
        </div>
    );
}

export default App;
