import React from 'react';
import s from './Skill.module.scss'

export function Skill(props: any) {
    return (
        <div className={s.skill}>
            <span className={s.iconContainer}>
                    <span className={s.img} style={props.style}></span>
            </span>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}