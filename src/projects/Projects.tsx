import React from 'react';
import cs from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import {Bounce, Fade} from "react-awesome-reveal";
import Particles from "react-tsparticles";
import socialnetwork from '../assets/images/socialnetwork.png'
import todolist from '../assets/images/todolist.png'
export function Projects() {

    const social={
        backgroundImage: `url(${socialnetwork})`
    }
    const tdl={
        backgroundImage: `url(${todolist})`
    }

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <Particles options={{
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffc514",
                    },
                    links: {
                        color: "#ff26be",
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 3,
                    },
                },
                detectRetina: true,
            }}
                        className={s.particles}/>

            <div className={`${cs.container} ${s.projectsContainer}`}>

                <Title smallText={'Projects'} text={'My React Applications'}/>

                <div className={s.projects}>
                    <Fade triggerOnce direction={"up"} duration={1500} cascade>
                        <Project path='social-network' style= {social} name={'Social Network'}
                                 description={'React, Redux, Redux Thunk, Typescript app using Function and Class components, React Hook Form, Axios, hooks, HOCs '}/>
                        <Project path='todolistwithreduxtoolkit' style= {tdl} name={'Todolist'}
                                 description={'React, Redux Toolkit, Typescript-based app w Material UI, Formik, Axios and Jest, Storybook for easy development and testing '}/>
                        {/*<Project name={'Counter'} description={'ASDFGH ASDF SDDFG dfgh sd'}/>*/}

                    </Fade>
                </div>

            </div>

        </div>
    );
}