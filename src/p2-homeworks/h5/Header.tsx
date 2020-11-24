import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import menu from "./menu.png"
import close from "./close.png"


function Header() {
    let [collapsed, setCollapsed] = useState(false)
let links={
        preJunior:"/pre-junior",
        junior:"/junior",
    juniorPlus:"/junior-plus",

}
    return (
        <div>
            <img className={s.img} onClick={() => setCollapsed(!collapsed)}
                 src={!collapsed ? menu : close}
                 alt=""/>
            <nav className={collapsed ? s.nav : s.navCollapsed}>


                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={links.preJunior} activeClassName={s.activeLink}>{collapsed ? "Prejunior" : ""}</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={links.junior} activeClassName={s.activeLink}>{collapsed ? "Junior" : ""}</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={links.juniorPlus}
                             activeClassName={s.activeLink}>{collapsed ? "Junior - plus" : ""}</NavLink>
                </div>
            </nav>

        </div>


    );
}

export default Header;
