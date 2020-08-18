import React from "react";
import s from "./Message.module.scss"

export type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    // Добавил свойство link, для того, чтобы использовать картинку и имя как ссылки
    link?: string
}

export function Message({ avatar, name, message, time, link = "https://github.com/Mirudistok32" }: MessageType) {
    return (
        <div className={s.message}>
            {/* Я не знаю, что значат атрибуты rel - у ссылок. 
                Когда пишешь атрибут target, то React требует атрибут rel. 
                Это как-то связанно с безапастностью, но я точно не понимаю этот процесс. */}
            <a className={s['message__img-link']} href={link} target="_blank" rel='noopener noreferrer'>
                <img className={s.message__img} src={avatar} alt="avatar" />
            </a>
            <div className={s.message__box}>
                <div className={s.message__content}>
                    <a className={s.message__name} href={link} target="_blank" rel='noopener noreferrer'>{name}</a>
                    <div className={s.message__text}>{message}</div>
                </div>
                <span className={s["message__time"]}>
                    {time}
                </span>
            </div>
        </div>
    );
}
