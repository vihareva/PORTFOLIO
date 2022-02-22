import React from 'react';
import s from './Title.module.scss'
import { Fade } from "react-awesome-reveal"

export function Title(props: any) {
    return <>
        <div className={s.miniTitleContainer}>
            <Fade triggerOnce direction={"right"} duration={1000}>
                <strong className={s.miniTitle}>{props.smallText}</strong>
            </Fade>
        </div>
        <Fade triggerOnce direction={"up"} delay={500} duration={1500}>
        <h2 className={s.title}>{props.text}</h2>
        </Fade>
    </>
}