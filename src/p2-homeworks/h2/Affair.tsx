import React from "react";
import { AffairType } from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: string) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) };// need to fix

    return (
        <div className={s.affair}>
            <span className={s.affair__name}>
                {
                    props.affair.name
                }
            </span>
            <button className={s.affair__btn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default React.memo(Affair);
