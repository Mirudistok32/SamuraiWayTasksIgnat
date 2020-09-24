import React from "react";
import s from './Error404.module.css'
import { NavLink } from "react-router-dom";


function Error404() {
    return (
        <div className={s.error}>
            <div className={s.error__number} >404</div>
            <div className={s.error__message} >Page not found!</div>
            <div className={s.error__symbol} >—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <div className={s.error__redirect}><NavLink to={`/`}>{"<= Вернуться на главную страницу"}</NavLink></div>
        </div>
    );
}

export default React.memo(Error404);
