import { DropzoneOptions } from 'react-dropzone';

export interface IFileInput {
    onDrop: DropzoneOptions['onDrop'];
    isUploadMore?: boolean;
}
