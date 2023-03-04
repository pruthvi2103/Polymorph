import { Input } from '@hover-design/react';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { IAcceptedFiles } from 'src/App.types';
import { InputImage } from './FileInput.css';
import { IFileInput } from './FileInput.types';

const InputBox = {
    backgroundColor: '#e7e7f4',
    outline: '2px dashed gray',
    outlineOffset: -10,
    borderRadius: 2,
    padding: '8rem'
};

const focusedStyle = {
    outlineColor: '#2196f3'
};

const acceptStyle = {
    outlineColor: '#4BB543'
};

const rejectStyle = {
    outlineColor: '#ff1744'
};

const FileInput = ({ onDrop }: IFileInput) => {
    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        open,
        isDragAccept,
        isFocused,
        isDragReject
    } = useDropzone({
        accept: { 'image/*': [] },
        onDrop
    });

    const dropFileStyles = useMemo(
        () => ({
            ...InputBox,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isFocused, isDragAccept, isDragReject]
    );

    return (
        <div onClick={open} {...getRootProps({ style: dropFileStyles })}>
            <Input
                className={InputImage}
                id="image-input"
                type="file"
                accept="image/*"
                {...getInputProps()}
            />
        </div>
    );
};

export default FileInput;
