import React from 'react';
import s from './Skills.module.scss'
import cs from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import tsimg from '../assets/images/ts.jpg';
import reactimg from '../assets/images/react.jpg';
import reduximg from '../assets/images/redux.jpg';
import cssimg from '../assets/images/htmlcss.jpg';

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
        <div className={s.skillsBlock}>
            <div className={`${cs.container} ${s.skillsContainer}`}>

                <Title smallText={'Skills'} text={'Programming Skills'}/>
                <div className={s.skills}>
                    <Skill style ={typescript} title={'Typescript'} description={'dfghj sdfghj awsedrftgyhuji sdf asdf asdfgh'}/>
                    <Skill style ={css} title={'HTML&CSS'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>
                    <Skill style ={redux} title={'Redux'} description={'ASDFGH AggggggggggggSDF SDDFG dfgh sd'}/>
                    <Skill style ={react} title={'React'}
                           description={'sdfghjkl qwertyujbvsweff fffffffffff ffffffffffff fffffffff ffffrt sdf sd sdfg sdfghj d'}/>
                </div>
            </div>

        </div>
    );
}