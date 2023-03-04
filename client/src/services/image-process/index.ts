import { getMetadata } from 'business_logic';
export async function getImageMetaData(fileBuffer: Buffer) {
    return getMetadata(fileBuffer);
}
