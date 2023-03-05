export const downloadB64Image = (b64Data: string, fileName: string) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = b64Data;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
