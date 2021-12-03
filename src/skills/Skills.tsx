import React from 'react';
import s from './Skills.module.css'
import cs from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${cs.container} ${s.skillsContainer}`}>

                    <Title smallText={'Skills'} text={'Programming Skills'}/>
                    <div className={s.skills}>
                        <Skill title={'HTML&CSS'} description={'dfghj sdfghj awsedrftgyhuji sdf asdf asdfgh'}/>
                        <Skill title={'JS'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>
                        <Skill title={'REACT'}
                               description={'sdfghjkl qwertyujbvsweff fffffffffff ffffffffffff fffffffff ffffrt sdf sd sdfg sdfghj d'}/>
                    </div>


            </div>

        </div>
    );
}