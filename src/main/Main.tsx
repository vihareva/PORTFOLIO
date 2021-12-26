import React from 'react';
import s from './Main.module.scss'
import cs from '../common/styles/Container.module.css'
import meimg from '../assets/images/me.jpg'



export function Main() {
    const me={
        backgroundImage:  `url(${meimg})`,
    }
    return (
        <div className={s.mainBlock}>

            <div className={`${cs.container} ${s.mainContainer}`}>

                <div className={s.left}>
                    <h1 className={s.bio}>
                        <strong className={s.job}>Front-end developer </strong>
                        <span className={s.name}>Kate <span className={s.white}>Vihareva</span></span>
                    </h1>
                    <span className={s.description}>I'm 19 y.o. Based in Belarus. Study in BSUIR.
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, eum fuga molestiaedoloribus eius eveniet id modi nam nulla perferendis, quis quo, saepe temporibus vero, voluptas.</span>
                    </span>
                </div>
                <div className={s.right}>
                    <div className={s.image}>
                        <img className={s.img} src="https://kura-vue.vercel.app/img/thumbs/3-4.jpg" alt=""/>
                        <div style={me} className={s.main}></div>
                        <div className={s.shape}></div>
                    </div>

                </div>


            </div>

        </div>
    );
}