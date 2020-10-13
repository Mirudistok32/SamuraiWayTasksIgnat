import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";
import s from './SuperSelect.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions = options.map((option, index) => <option key={option + '_key_' + index}>{option}</option>)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const selectClasses = [s.select]

    return (
        <select
            className={selectClasses.join(' ')}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
}

export default React.memo(SuperSelect);
