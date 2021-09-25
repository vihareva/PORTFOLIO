import React from 'react';
import s from './Header.module.css'
import {NavMenu} from "./nav-menu/NavMenu";


export function Header() {
    return (
        <div className={s.header}>
            <NavMenu/>
        </div>
    );
}


