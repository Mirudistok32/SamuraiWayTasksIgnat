import React from "react";
import Affair from "./Affair";
import s from './Affairs.module.css'
import { AffairType, FilterType } from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

// Мой тип для массива кнопок
type ButtonsDataType = {
    name: string,
    filter: FilterType,
    _id: number
}

function Affairs(props: AffairsPropsType) {


    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => { props.setFilter('all') }; // need to fix
    // const setHigh = () => { props.setFilter('high') };
    // const setMiddle = () => { props.setFilter('middle') };
    // const setLow = () => { props.setFilter('low') };


    // Мой массив кнопок
    const buttonsData: Array<ButtonsDataType> = [
        { name: 'All', filter: 'all', _id: 1 },
        { name: 'High', filter: 'high', _id: 2 },
        { name: 'Middle', filter: 'middle', _id: 3 },
        { name: 'Low', filter: 'low', _id: 4 },
    ]

    return (
        <div className={s.affairs} >

            {mappedAffairs}

            {/* Это вариант тоже работает, но только без подсвечивания активной кнопки */}
            {/* <button className={s.affairs__btn} onClick={setAll}>All</button>
            <button className={s.affairs__btn} onClick={setHigh}>High</button>
            <button className={s.affairs__btn} onClick={setMiddle}>Middle</button>
            <button className={s.affairs__btn} onClick={setLow}>Low</button> */}
            {/* Создал массив с объектами, которые представляют набор button.
                затем пробегаюсь по массиву через метод map(), вешаю на каждую кнопку событие onClick
                и устанавливаю через callback функцию setFilter() фильтр. Взависимости от фильтра, 
                активной кнопке применяются другие стили */}
            {
                buttonsData.map(i => {
                    return <button
                        key={i._id}
                        className={`
                            ${s.affairs__btn} 
                            ${i.filter === props.filter ? s.active : ''}
                        `}
                        onClick={() => props.setFilter(i.filter)}>{i.name}</button>
                })
            }
        </div>
    );
}

export default Affairs;
