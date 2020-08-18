import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.PRE_JUNIOR_PLUS}>PRE_JUNIOR_PLUS</NavLink>
        </div>
    );
}

export default Header;
