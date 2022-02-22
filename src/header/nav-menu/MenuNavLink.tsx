import React, {useState} from 'react';
import s from './MenuNavLink.module.scss'
import {Link} from "react-scroll/modules";

type LinkProps={
    path: string
    linkName:string
}
export function MenuNavLink(props: LinkProps) {

    return  <li className={s.li}>
        {/*<a  className={s.link}*/}
        {/*    // className={linkClicked? `${s.clicked} ${s.link} `: s.link}*/}
        {/*      href={props.path}>*/}
            <Link

                to={props.path}
                spy={true}
                smooth={true}
                offset={-58}
                duration={700}
                className={s.link}
                activeClass={s.active}
            >
                {props.linkName}
            </Link>
    {/*</a>*/}
    </li>

}
