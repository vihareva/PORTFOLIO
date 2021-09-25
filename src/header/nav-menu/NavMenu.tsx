import React from 'react';
import s from './NavMenu.module.css'


export function NavMenu() {
    return (
        <div className={s.navMenu}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}
