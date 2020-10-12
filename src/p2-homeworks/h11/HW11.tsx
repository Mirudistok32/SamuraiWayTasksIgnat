import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.scss'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onChangeDoubleRangeHandler = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }
    const onChangeRangeHandler = (value: number) => {
        setValue1(value);
    }
    return (
        <div className={s.hw11}>
            <hr />
            homeworks 11

            <div className={s['hw11__slider']}>
                <span  className={s['hw11__slider-title']}>Range</span>
                <div className={s['hw11__slider-box']}>
                    <span className={s['hw11__slider-label']}>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeRangeHandler}
                    />
                </div>
            </div>

            <div className={s['hw11__range']}>
                <span className={s['hw11__range-title']}>DoubleRange</span>
                <div className={s['hw11__range-box']}>
                    <span className={s['hw11__range-label']}>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleRangeHandler}
                    />
                    <span className={s['hw11__range-label']}>{value2}</span>
                </div>
            </div>


            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr />
        </div>
    );
}

export default HW11;
