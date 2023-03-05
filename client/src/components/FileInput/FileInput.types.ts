import { IImagesArray } from 'src/App.types';

export interface IFileInput {
    onDrop: (acceptedFiles: IImagesArray[]) => void;
}
