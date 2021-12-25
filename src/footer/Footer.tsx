import React from 'react';
import s from './Footer.module.scss'
import cs from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";



export function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${cs.container} ${s.footerContainer}`}>
                <div className={s.text}>
                    Copyright © 2021. All rights reserved.
                </div>
                <div className={s.social}>
                    {/*/надо придумать на что можно дать ссылки*/}
                    <div><a className={s.link} href={"https://www.facebook.com"} >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a></div>
                    <div><a className={s.link} href={"https://www.facebook.com"} >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a></div>
                    <div><a className={s.link} href={"https://www.facebook.com"} >
                        <FontAwesomeIcon icon={faInstagram} size={'lg'}/>
                    </a></div>
                    <div><a className={s.link} href={"https://www.facebook.com"} >
                        <FontAwesomeIcon icon={faGithub} size={'2x'}/>
                    </a></div>

                </div>
            </div>
        </div>
    );
}