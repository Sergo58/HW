import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"


function Header() {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <img className={s.img} onClick={() => setCollapsed(!collapsed)}
                 src={!collapsed ? "https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395871-menu_80607.png" : "https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395882-close_80604.png"}
                 alt=""/>
            <nav className={collapsed ? s.nav : s.navCollapsed}>


                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={"/pre-junior"} activeClassName={s.activeLink}>{collapsed ? "Prejunior" : ""}</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={"/junior"} activeClassName={s.activeLink}>{collapsed ? "Junior" : ""}</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={"/junior-plus"}
                             activeClassName={s.activeLink}>{collapsed ? "Junior - plus" : ""}</NavLink>
                </div>
            </nav>

        </div>


    );
}

export default Header;
