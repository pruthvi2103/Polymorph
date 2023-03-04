import { Input, Label } from '@hover-design/react';
import { InputProps } from '@hover-design/react/dist/types/components/Input/input.types';
import React from 'react';

interface Props {}

const FileInput = (props: InputProps) => {
    return (
        <Label htmlFor="image-input">
            <Input {...props} id="image-input" type="file" />
        </Label>
    );
};

export default FileInput;
