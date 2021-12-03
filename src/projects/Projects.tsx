import React from 'react';
import cs from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
export function Projects() {
    return (
        <div className={s.projectsBlock}>

            <div className={`${cs.container} ${s.projectsContainer}`}>

                <Title smallText={'Projects'} text={'My React Applications'}/>

                <div className={s.projects}>
                    <Project name={'Todolist'} description={'dfghj sdfghj awsedrftgyhuji sdf asdf asdfgh'}/>
                    <Project name={'Counter'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>
                    <Project name={'Social Network'} description={'sdfghjkl qwertyujbvsweff fffffffffff ffffffffffff fffffffff ffffrt sdf sd sdfg sdfghjd'}/>
                </div>

            </div>

        </div>
    );
}