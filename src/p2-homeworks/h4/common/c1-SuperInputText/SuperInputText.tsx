import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent } from "react";
import s from "./SuperInputText.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    setError: (value: string) => void
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (props) => {

    const {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange,
        onKeyPress,
        className,

        onChangeText,
        onEnter,
        error,
        spanClassName,
        setError,

        ...restProps
    } = props


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeText && onChangeText(e.currentTarget.value);
        setError("")
    }


    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
            && onEnter // и есть пропс onEnter
            && onEnter(); // то вызвать его
    }


    let finalSpanClassName = s.forSuperIputTextSpan + ` ${spanClassName ? spanClassName : ''}`;
    finalSpanClassName += ` ${error ? s.error : ''}`;

    let finalInputClassName = s.forSuperIputText + ` ${className ? className : ''}`;
    finalInputClassName += ` ${error ? s.errorInput : ''}`;

    // Старый код, если раскоментировать решение в HW4, то это не будет работать, так как, всегда пустая строка приходит
    // const finalInputClassName = error ? s.errorInput : className

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>*{error}</span>}
        </>
    );
}

export default SuperInputText;
