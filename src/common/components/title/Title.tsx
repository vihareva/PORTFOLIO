import React from 'react';
import s from './Title.module.scss'

export function Title(props: any) {
    return <>
        <strong className={s.miniTitle}>{props.smallText}</strong>
        <h2 className={s.title}>{props.text}</h2>
    </>
}