import React from 'react';
import { RangeSliderInput, RangeSliderInputWrapper } from './RangeSlider.css';

interface Props {
    value: number;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({ value, onChangeHandler }: Props) => {
    return (
        <div className={RangeSliderInputWrapper}>
            <label>
                {value}
                <input
                    value={value}
                    onChange={onChangeHandler}
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    className={RangeSliderInput}
                />
            </label>
        </div>
    );
};

export default RangeSlider;
