import React from 'react';
import s from './Main.module.scss'
import cs from '../common/styles/Container.module.css'
import meimg from '../assets/images/me.jpg'
import {Fade} from "react-awesome-reveal";



export function Main() {
    const me={
        backgroundImage:  `url(${meimg})`,
    }
    return (
        <div id={'home'} className={s.mainBlock}>

            <div className={`${cs.container} ${s.mainContainer}`}>

                <div className={s.left}>
                    <h1 className={s.bio}>
                        <div className={s.jobContainer}>
                            <Fade triggerOnce direction={"left"} delay={500} duration={1500}>
                                <strong className={s.job}>Front-end developer </strong>
                            </Fade>
                        </div>
                        <Fade triggerOnce direction={"left"} delay={1000} duration={1500}>
                        <span className={s.name}>Kate <span className={s.white}>Vihareva</span></span>
                        </Fade>
                    </h1>
                    <Fade triggerOnce direction={"left"} delay={1300} duration={1500}>
                    <span className={s.description}>Hello! I'm 19 y.o. I'm a third-year student of the BSUIR.
                        <span> I create SPA using a technology stack that consists of React, Redux, TypeScript. I'm open-minded for new technologies and always looking forward to improve my expertise.</span>
                    </span>
                    </Fade>
                </div>
                <div className={s.rightContainer}>
                <Fade direction={"right"} triggerOnce delay={1000} duration={1800}>
                <div className={s.right}>
                    <div className={s.image}>
                        <img className={s.img} src="https://kura-vue.vercel.app/img/thumbs/3-4.jpg" alt=""/>
                        <div style={me} className={s.main}></div>
                        <div className={s.shape}></div>
                    </div>
                </div>
                </Fade>
                </div>
            </div>

        </div>
    );
}