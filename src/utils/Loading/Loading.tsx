import React from 'react'
import s from './Loading.module.scss'

type PropsType = {
    size?: number
    color?: string
}

export const Loading: React.FC<PropsType> = React.memo((props) => {

    const { size = 40, color = 'dodgerblue' } = props
    const sizeStyle = size + "px"

    return (
        <div className={s.loader__wrap}>
            <div className={s.loader}>
                <div className={s.ball} style={{ height: sizeStyle, width: sizeStyle, backgroundColor: color }}></div>
                <div className={s.ball} style={{ height: sizeStyle, width: sizeStyle, backgroundColor: color }}></div>
                <div className={s.ball} style={{ height: sizeStyle, width: sizeStyle, backgroundColor: color }}></div>
            </div>
            <svg className={s.svg}
                xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    )
})

