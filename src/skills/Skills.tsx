import React from 'react';
import s from './Skills.module.scss'
import cs from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import tsimg from '../assets/images/ts.jpg';
import reactimg from '../assets/images/react.jpg';
import reduximg from '../assets/images/redux.jpg';
import cssimg from '../assets/images/htmlcss.jpg';
import {Fade} from "react-awesome-reveal";

export function Skills() {
    const typescript={
        backgroundImage: `url(${tsimg})`,
    }
    const react={
        backgroundImage: 'url('+ reactimg+ ')'
    }
     const redux={
        backgroundImage: 'url('+ reduximg+ ')'
    }
     const css={
        backgroundImage: 'url('+ cssimg+ ')'
    }

    return (
        <div id={'skills'}className={s.skillsBlock}>
            <div className={`${cs.container} ${s.skillsContainer}`}>

                <Title smallText={'Skills'} text={'Programming Skills'}/>
                <div className={s.skills}>
                    <Fade triggerOnce direction={"up"} duration={1000} delay={500} cascade>
                     <Skill style ={react} title={'React'}
                           description={'Functional and Class components, React Router, Material UI, Hooks, HOCs,' +
                           ' Jest and Storybook'}/>
                        <Skill style ={redux} title={'Redux'} description={'Redux Thunk, Redux Toolkit, Redux Saga'}/>
                        <Skill style ={typescript} title={'Typescript'} description={'Javascript ES6+, Generic Types, Union Types and Intersection Types'}/>
                        <Skill style ={css} title={'HTML&CSS'} description={'adaptive and responsive design, SCSS/SASS'}/>
                    </Fade>
                </div>
            </div>

        </div>
    );
}