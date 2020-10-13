import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import s from "./HW12.module.css";
import { AppStoreType } from "../h10/bll/store"
import { changeThemeC } from "./bll/themeReducer";

// Не придумал, как со старта задавать начальный параметр селекту, чтобы совпадали, поэтому добавил default в массив
const themes = ['default', 'dark', 'red', 'some', 'darkturquoise', 'deepskyblue', 'hotpink'];
// только через прокидку пропсов надумал как со stories-м работать 
type PropsType = {
    themesList?: string[],
    themeLabel?: string,
    onChange?: (option: string) => void
}
const HW12: React.FC<PropsType> = ({ themeLabel, themesList, onChange }) => {
    const theme = useSelector((state: AppStoreType) => state.themeReducer.currentTheme)

    const dispatch = useDispatch()
    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    const themeStyles = themeLabel ? themeLabel : theme

    return (
        <div className={s[themeStyles]}>
            <hr />
            <span className={s[themeStyles + '-text'] + " " + s.span}>
                homeworks 12
            </span>
            {/* Ничего умнее не придумал, как устанавливать с самого начала значение по-умолчанию */}
            <SuperSelect options={themesList ? themesList : themes} onChangeOption={onChangeCallback} />
            <hr />
        </div>
    );
}

export default HW12;
