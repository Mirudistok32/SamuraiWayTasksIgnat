import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, value: string) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(value)
    }


    const mappedOptions = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <input
                type={type}
                name={name}
                onChange={(e) => onChangeCallback(e, o)}
                checked={o === value ? true : false}
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
