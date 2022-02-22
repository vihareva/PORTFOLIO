import React from 'react';
import s from './Footer.module.scss'
import cs from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Rotate, Zoom} from "react-awesome-reveal";


export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${cs.container} ${s.footerContainer}`}>
                <div className={s.text}>
                    <div>
                        <Zoom triggerOnce delay={500}>
                            <div>
                                Copyright © 2021. All rights reserved.
                            </div>
                        </Zoom>
                    </div>

                </div>
                <div className={s.social}>
                    <Rotate triggerOnce delay={400} cascade>

                        <div><a className={s.link} href={"https://github.com/vihareva"}>
                            <FontAwesomeIcon icon={faGithub} size={'2x'}/>
                        </a></div>
                        <div><a className={s.link} href={"https://www.linkedin.com/in/ekaterinavihareva/"}>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a></div>
                        <div><a className={s.link} href={"https://t.me/vihar_eva"}>
                            <FontAwesomeIcon icon={faTelegram} size={'2x'}/>
                        </a></div>
                        <div><a className={s.link} href={"https://wa.me/375296054883"}>
                            <FontAwesomeIcon icon={faPhone} flip="horizontal"/>
                        </a></div>

                    </Rotate>
                </div>
            </div>
        </div>
    )
}