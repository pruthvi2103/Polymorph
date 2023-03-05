import React from 'react';
import { RangeSliderInput, RangeSliderInputWrapper } from './RangeSlider.css';

interface Props {}

const RangeSlider = ({ value, onChangeHandler }) => {
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
