import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink activeClassName={s.header__active} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink activeClassName={s.header__active} to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink activeClassName={s.header__active} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>
            <NavLink activeClassName={s.header__active} to={PATH.HOMEWORK_FROM_9_TO_10}>HOMEWORK_FROM_9_TO_10</NavLink>
        </div>
    );
}

export default Header;
