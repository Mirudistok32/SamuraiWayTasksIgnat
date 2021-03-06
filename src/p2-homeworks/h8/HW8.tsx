import React, { ChangeEvent, useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW8.module.scss'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

const initialPeople = [
    { _id: 0, name: "Кот", age: 3 },
    { _id: 1, name: "Александр", age: 66 },
    { _id: 2, name: "Коля", age: 16 },
    { _id: 3, name: "Виктор", age: 44 },
    { _id: 4, name: "Дмитрий", age: 40 },
    { _id: 5, name: "Ирина", age: 55 },
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div
            key={p._id}
            className={s.people}
        >
            <span><b>Имя: </b>{p.name}</span>
            <span><b>Возраст: </b>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "up" }))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "down" }))
    const setCheckedPeople = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) setPeople(homeWorkReducer(initialPeople, { type: "check", payload: 18 }))
    }

    return (
        <div>
            <hr />
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <SuperCheckbox onChange={e => setCheckedPeople(e)} />
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr />
        </div>
    );
}

export default React.memo(HW8);
