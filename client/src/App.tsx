import FileInput from '@components/FileInput/FileInput';
import { Button, Input } from '@hover-design/react';
import { getImageMetaData } from '@services/image-process';
import { useState } from 'react';
import * as styles from './App.css';

function App() {
    const [fileMeta, setFileMetaData] = useState(null);

    const handleFileInput = async (e) => {
        const data = await getImageMetaData(e.target.files[0]);
        // setFileMetaData(data);
        console.log(data);
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
