import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperRange.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте

    value?: number
    value2?: number
    setValue?: (value: number[]) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, value2,
        className,
        setValue, value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // сохраняем старую функциональность
        if (setValue) {
            if (value2) {
                setValue([+e.currentTarget.value, value2])
            }
        }
// @ts-ignore



        console.log(value)


    }

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;


    return (
        <>
            <input

                value={value}
                type={"range"}

                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    );
}

export default SuperRange;
