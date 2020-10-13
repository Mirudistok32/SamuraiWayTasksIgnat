import { format } from "path";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import s from "./HW12.module.css";
import { AppStoreType } from "../h10/bll/store"
import { changeThemeC } from "./bll/themeReducer";

const themes = ['default', 'dark', 'red', 'some', 'darkturquoise', 'deepskyblue', 'hotpink'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.themeReducer.currentTheme)

    const dispatch = useDispatch()
    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text'] + " " + s.span}>
                homeworks 12
            </span>

            <SuperSelect options={themes} onChangeOption={onChangeCallback} />
            <hr />
        </div>
    );
}

export default HW12;
