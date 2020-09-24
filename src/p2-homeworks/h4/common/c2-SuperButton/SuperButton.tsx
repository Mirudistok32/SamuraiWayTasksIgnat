import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    const {
        red,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    } = props

    let finalClassName = `${red ? s.red : ''} ${s.defaultBtn + ` ` + className} `;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
}

export default React.memo(SuperButton);
