export type IImagesArray = IAcceptedFiles & IAcceptedFilesMetaData;

export type IAcceptedFiles = {
    id: number;
    src: string | ArrayBuffer | null;
};

export type IAcceptedFilesMetaData = {
    path: string;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
};
