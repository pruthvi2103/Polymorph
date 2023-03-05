import { Select } from '@hover-design/react';
import React from 'react';

interface IConvertToProps {
    changeHandler: (e: any) => void;
    value: { label: string; value: string };
}
const options = [
    { label: 'PNG', value: 'png' },
    { label: 'JPEG', value: 'jpeg' },
    { label: 'WEBP', value: 'webp' },
    { label: 'SVG', value: 'svg' }
];

const ConvertToSelect = ({ value, changeHandler }: IConvertToProps) => {
    return (
        <Select
            placeholder="Convert To"
            onChange={changeHandler}
            options={options}
            value={value}
        />
    );
};

export default ConvertToSelect;
