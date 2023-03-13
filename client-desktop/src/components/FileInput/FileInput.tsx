import UploadIcon from '@assets/upload.svg';
import { Input } from '@hover-design/react';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { IAcceptedFiles } from 'src/App.types';
import { InputImage, PlaceholderText } from './FileInput.css';
import { IFileInput } from './FileInput.types';

const InputBox = {
    backgroundColor: '#e7e7f4',
    outline: '2px dashed #808080',
    outlineOffset: -10,
    borderRadius: 2,
    padding: '6rem',
    cursor: 'pointer'
};

const focusedStyle = {
    outline: '2px dashed #2196f3'
};

const acceptStyle = {
    outline: '2px dashed #4BB543'
};

const rejectStyle = {
    outline: '2px dashed #ff1744'
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
        // @ts-ignore
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
            <div className={PlaceholderText}>
                <img src={UploadIcon} alt="Upload Icon" />
                <p>Drop files here</p>
            </div>
        </div>
    );
};

export default FileInput;
