import { Select } from '@hover-design/react';
import React from 'react';

interface Props {}
const options = [
    { label: 'PNG', value: 'png' },
    { label: 'JPEG', value: 'jpeg' },
    { label: 'WEBP', value: 'webp' },
    { label: 'SVG', value: 'svg' }
];

const ConvertToSelect = (props: Props) => {
    return <Select placeholder="Convert To" options={options} />;
};

export default ConvertToSelect;
