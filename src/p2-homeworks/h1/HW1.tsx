import React from "react";
import { Message } from './Message'
// Я подключил глобальные стили, для комфорта. Обычно я их в index.css записываю)
import s from './HW1.module.css'

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Станислав (mirudistok) Постников",
    message: "`Успех приходит лишь к тем, кто не боится столкнуться с трудностями и пожертвовать своими благами. Джеймс Аллен`",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr />
            <span className={s.hw1__title}>homeworks 1</span>
            {/*should work (должно работать)*/}

            {/* У себя в index.html я подключил шрифт Roboto с жирностью 400 и 500 из google-fonts */}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time} />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    );
}

export default HW1;
