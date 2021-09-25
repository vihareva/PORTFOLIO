import React from 'react';
import s from './Skills.module.css'
import cs from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export function Skills() {
    return (
        <div className={s.skillsBlock}>

            <div className={`${cs.container} ${s.skillsContainer}`}>

                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML&CSS'} description={'dfghj sdfghj awsedrftgyhuji sdf asdf asdfgh'}/>
                    <Skill title={'JS'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>
                    <Skill title={'REACT'} description={'sdfghjkl qwertyujbvsweff fffffffffff ffffffffffff fffffffff ffffrt sdf sd sdfg sdfghj d'}/>
                </div>

            </div>

        </div>
    );
}