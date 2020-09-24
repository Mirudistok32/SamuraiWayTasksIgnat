import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);
    const [isTitle, setIsTitle] = useState<boolean>(false)

    const stop = () => {
        setTimerId(0)
        window.clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setShow(true)
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setIsTitle(true)
    };
    const onMouseLeave = () => {
        setIsTitle(false)
    };

    const stringTime = timerId.toString();
    const stringDate = date?.toString();

    return (
        <div>
            <div
                title={isTitle ? stringDate : ""}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date__display}>
                    <span className={s.date__hour}></span>
                    <span className={s.date__minuts}></span>
                    <span className={s.date__seconds}></span>
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
