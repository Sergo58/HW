import React, {ChangeEvent, useState} from "react";
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

type SuperDoubleRangePropsType = {

    onChangeHandler?: (value: number[]) => void
    value?: number[]
    setValue?: (value: number[]) => void
    setValue1?: (value: number) => void

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue, value, onChangeHandler,
        setValue1

        // min, max, step, disable, ...
    }
) => {


    onChangeHandler = (value: number[]) => {

        if (setValue) {
            if (value) {
                setValue([value[0], value[1]])

            }
        }


    }


    return (
        <>

            <div>

                <Range  value={value} onChange={onChangeHandler
                }/>
            </div>
        </>
    );
}

export default SuperDoubleRange;
