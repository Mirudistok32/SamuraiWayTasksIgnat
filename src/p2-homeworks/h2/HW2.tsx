import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = 'high' | "low" | "middle"; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}; // need to fix any
export type FilterType = "all" | AffairPriorityType;


// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    { _id: 1, name: "React-high", priority: "high" },
    { _id: 2, name: "anime-low", priority: "low" },
    { _id: 3, name: "games-low", priority: "low" },
    { _id: 4, name: "work-high", priority: "high" },
    { _id: 5, name: "html & css-middle", priority: "middle" },
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
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id); // need to fix
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

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

export default HW2;
