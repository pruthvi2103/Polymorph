import { Select } from '@hover-design/react';
import React from 'react';

interface IConvertToProps {
    changeHandler: (e: { value: string; label: string }) => void;
    value: { value: string; label: string };
}
const options = [
    { label: 'PNG', value: 'png' },
    { label: 'JPEG', value: 'jpeg' },
    { label: 'WEBP', value: 'webp' },
    { label: 'SVG', value: 'svg' },
    { label: 'BMP', value: 'bmp' },
    { label: 'TIFF', value: 'tiff' },
    { label: 'GIF', value: 'gif' },
    { label: 'ICO', value: 'ico' }
];

const ConvertToSelect = ({ value, changeHandler }: IConvertToProps) => {
    return (
        <Select
            placeholder="Convert To"
            // @ts-ignore
            onChange={changeHandler}
            options={options}
            value={value}
        />
    );
};

export default ConvertToSelect;
