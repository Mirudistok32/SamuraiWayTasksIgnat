import React, { ChangeEvent } from "react";
import s from "./Greeting.module.scss";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers = 0, } // деструктуризация пропсов
) => {

    // Это по заданию
    // let inputClass = `` // need to fix with (?:)
    // inputClass = error ? s.error : ``

    // А тут я уже свои классы добавляю
    let inputClass = s.greeting__input
    inputClass = error ? inputClass + ` ` + s.error : inputClass; // вот тут неуверен в красивости кода

    // Вот так для меня более понятнее .)
    // if (error) {
    //     inputClass += ` ${s.error}`
    // }


    return (
        <div className={s.greeting}>
            <div className={s["greeting__box-input"]}>
                <input
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    placeholder="Введите имя"
                />
                <span className={s.greeting__error}>{error}</span>
            </div>
            <div className={s["greeting__box-button"]}>
                <button
                    className={s.greeting__btn}
                    onClick={addUser}>
                    add
                </button>
                <span className={s.greeting__total}>{totalUsers}</span>
            </div>
        </div>
    );
}

export default React.memo(Greeting);
