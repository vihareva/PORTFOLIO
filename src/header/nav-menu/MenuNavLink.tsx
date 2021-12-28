import React, {useState} from 'react';
import s from './MenuNavLink.module.scss'

type LinkProps={
    path: string
    linkName:string
}
export function MenuNavLink(props: LinkProps) {

    const [linkClicked, setLinkClicked]=useState<boolean>(false)
    const onClickHandler=()=>{
        setLinkClicked(true)
    }

    return  <li className={s.li}>
        <a onClick={onClickHandler}
              className={linkClicked? `${s.clicked} ${s.link} `: s.link}
              href={props.path}>
        {props.linkName}
    </a>
    </li>

}
