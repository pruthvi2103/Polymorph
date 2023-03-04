import FileInput from '@components/FileInput.tsx/FileInput';
import { Button, Input } from '@hover-design/react';
import * as styles from './App.css';

function App() {
    return (
        <div className={styles.GlobalWrapper}>
            <div className={styles.FileInputSection}>
                <FileInput />
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
