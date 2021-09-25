import React from 'react';
import s from './Main.module.css'
import cs from '../common/styles/Container.module.css'


export function Main() {
    return (
        <div className={s.mainBlock}>

            <div className={cs.container}>

                <div className={s.text}>
                    <span className="name">Kate Vihareva</span>
                    <h1 className="job">Front-end developer</h1>
                    <p>I'm 19 y.o. Based in Belarus. Study in BSUIR.</p>
                </div>
                <div className={s.photo}></div>

            </div>

        </div>
    );
}