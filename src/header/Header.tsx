import React from 'react';
import s from './Header.module.scss'
import cs from '../common/styles/Container.module.css'
import {MenuNavLink} from "./nav-menu/MenuNavLink";

export function Header() {
    const links=[
        {linkName: 'Home', path: ''},
        {linkName:'Skills', path: ''},
        {linkName:'Projects', path: ''},
        {linkName:'Contacts', path: ''}
    ]

    return (
        <div className={s.header}>
            <div className={`${cs.container} ${s.container}`}>
                <div className={s.navMenu}>
                    <ul className={s.navBar}>
                        {links
                            .map(l=>{return (
                                <MenuNavLink path={l.path} linkName={l.linkName}/>
                            )})
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
}


