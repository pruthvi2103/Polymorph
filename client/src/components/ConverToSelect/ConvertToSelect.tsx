import { Label, Select } from '@hover-design/react';
import React from 'react';
import { LabelStyle, SelectorContainer, SelectorInput } from './ConvertTo.css';

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
        <div className={SelectorContainer}>
            <Label className={LabelStyle} htmlFor="convert-selector">
                Convert To
            </Label>
            <Select
                className={SelectorInput}
                id="convert-selector"
                placeholder="Convert To"
                onChange={changeHandler}
                options={options}
                value={value}
            />
        </div>
    );
};

export default ConvertToSelect;
