import { Input, Label } from '@hover-design/react';
import React from 'react';

interface Props {}

const FileInput = (props: Props) => {
    return (
        <Label htmlFor="image-input">
            <Input id="image-input" type="file" />
        </Label>
    );
};

export default FileInput;
