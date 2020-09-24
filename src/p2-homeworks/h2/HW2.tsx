import React, { useState } from "react";
import Affairs from "./Affairs";
import { v4 } from "uuid";

// types
export type AffairPriorityType = 'high' | "low" | "middle"; // need to fix any
export type AffairType = {
    _id: string
    name: string
    priority: FilterType
}; // need to fix any
export type FilterType = "all" | AffairPriorityType;


// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    { _id: v4(), name: "HTML, CSS, JS, TS", priority: "high" },
    { _id: v4(), name: "React, Redux,", priority: "high" },
    { _id: v4(), name: "Hooks, Formik", priority: "high" },
    { _id: v4(), name: "JEST, Storybook, ANT design, Git", priority: "low" },
    { _id: v4(), name: "REST API, redux thunk", priority: "high" },
    { _id: v4(), name: "Pure function", priority: "middle" },
    { _id: v4(), name: "React.PureComponent, React.memo, React.lazy, React.Suspense", priority: "middle" },
    { _id: v4(), name: "FLUX, HOC, DOM, VIRTUAL DOM,", priority: "high" },
    { _id: v4(), name: "Select, reselect, redux-ducks", priority: "low" },
    { _id: v4(), name: "DAL, API, BLL, UI", priority: "low" },
    { _id: v4(), name: "Babel, Webpack, Yarn, NPM", priority: "low" },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    switch (filter) {
        case 'all':
            return affairs
        case 'high':
            return affairs.filter(a => a.priority === 'high')
        case 'middle':
            return affairs.filter(a => a.priority === 'middle')
        case 'low':
            return affairs.filter(a => a.priority === 'low')
        default:
            return affairs
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: string): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id); // need to fix
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <hr />
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                // Отправляю фильтр для того, чтобы можно было задать
                // активной кнопке класс
                filter={filter}

            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    );
}

export default React.memo(HW2);
