import React, { ChangeEvent, useState } from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {

    const [text, setText] = useState<string>("");
    //Сделал свой хук для ошибки
    let [error, setError] = useState<string>('')


    const showAlert = () => {

        //Проверка, если поле пустое , то ошибка, а иначе нет ошибки
        text ? setError("") : setError("error")
        if (error) {
            alert("введите текст...");
        } else {
            alert(text);
            //Затераю поле value
            setText('')
        }
    }


    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr />
            homeworks 4
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    setError={setError}
                    placeholder={'Я input, читаю ваши...'}
                // className={s.blue} работает!
                />

                <SuperButton
                    red={false}
                    onClick={showAlert}
                >
                    delete
                </SuperButton>


                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange} />
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr />
        </div>
    );
}

export default HW4;
