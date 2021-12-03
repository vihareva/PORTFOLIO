import React from 'react';
import s from './Project.module.scss'

export function Project(props: any){
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.button}href="">
                    <span className={s.textLink}>view</span>
                </a>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectName}>{props.name}</div>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );
}