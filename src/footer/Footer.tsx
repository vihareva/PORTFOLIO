import React from 'react';
import s from './Footer.module.css'
import cs from '../common/styles/Container.module.css'

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${cs.container} ${s.footerContainer}`}>
                <div className={s.text}>
                    <p>Copyright © 2021. All rights reserved.</p>
                </div>
                <div className={s.social}>

                        <div><a href="">x</a></div>
                        <div><a href="">x</a></div>
                        <div><a href="">x</a></div>
                        <div><a href="">x</a></div>

                </div>
            </div>
        </div>
    );
}