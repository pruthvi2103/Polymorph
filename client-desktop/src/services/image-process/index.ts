export function convertFileSizeToKb(fileSize: number) {
    return fileSize / 1000;
}

export async function getImageMetaData(imageFile: File) {
    const { name } = imageFile;
    const fileExtension = name.split('.').pop();
    const fileSize = imageFile.size;
    return {
        fileName: name,
        fileExtension,
        fileSize: convertFileSizeToKb(fileSize)
    };
}
