import React from 'react';
import s from './Projects.module.css'
import cs from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
export function Projects() {
    return (
        <div className={s.projectsBlock}>

            <div className={`${cs.container} ${s.projectsContainer}`}>

                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project name={'TODOLIST'} description={'dfghj sdfghj awsedrftgyhuji sdf asdf asdfgh'}/>
                    <Project name={'COUNTER'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>
                    <Project name={'SOCIAL-NETWORK'} description={'sdfghjkl qwertyujbvsweff fffffffffff ffffffffffff fffffffff ffffrt sdf sd sdfg sdfghjd'}/>
                </div>

            </div>

        </div>
    );
}