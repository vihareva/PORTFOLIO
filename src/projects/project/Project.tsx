import React from 'react';
import s from './Project.module.css'

export function Project(props: any){
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.button}href="">case study</a>
            </div>
            <span className={s.projectName}>{props.name}</span>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}