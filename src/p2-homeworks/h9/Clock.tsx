import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    // Состояние для появления title при наведении на stringTime
    const [isTitle, setIsTitle] = useState<boolean>(false)

    //У меня стоп полностью все зачищает и надо по новой начинать
    const stop = () => {
        setTimerId(0)
        window.clearInterval(timerId)
    }
    const start = () => {
        // Вот тут stop вызывается, поэтому не очень понял как его правильно нужно реализовать. 
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


    // Не понял что с этим делать? т.е. это только для вывода на экран?
    // Или тут что-то другое надо было написать?
    // Когда кликаю на кнопку старт, то тут всегда число идет на увеличение, на 3 всегда
    const stringTime = timerId.toString();

    const stringDate = date?.toString()
    // Свой переменные объявил для лаконичного вывода времени.
    // Кстати, реакт же не отслеживает изменение этих переменных? они изменяются только из-за вызова setInterval?
    // Такие переменные относятся к state или это просто переменные? 
    const stringHour = date?.getHours()
    const stringMinuts = date?.getMinutes()
    const stringSecond = date?.getSeconds()

    // Обработчики весят на stringTime, поэтому я сделал при наведении на него, будет title появляться
    //
    // Но я так же повесил обработчики и на дисплей с stringDate
    return (
        <div
            className={s.date + ` ${show ? s.date__active : ""}`}
        >
            <span className={s.date__title}>Big Ben</span>
            <div
                title={isTitle ? stringDate : ''}
                className={s.date__stringTime}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div
                    title={isTitle ? stringDate : ''}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.date__display}
                >
                    {/* Когда доходит до 59, то дальше все равно появляется на секунд 0, не придумал что с этим делать*/}
                    <span className={s.date__hour}>{stringHour && stringHour < 10 ? `0${stringHour}` : stringHour}</span>:
                    <span className={s.date__minuts}>{stringMinuts && stringMinuts < 10 ? `0${stringMinuts}` : stringMinuts}</span>:
                    <span className={s.date__seconds}>{stringSecond && stringSecond < 10 ? `0${stringSecond}` : stringSecond}</span>
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default React.memo(Clock);
